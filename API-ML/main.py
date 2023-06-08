import io
from PIL import Image
import torch
from torchvision.transforms import functional as F
from flask import Flask, request, jsonify

app = Flask(__name__)
model = torch.hub.load('./yolov5', 'custom', path='./model.pt', source='local')
model.eval()
DETECTION_URL = "/predict"
@app.route(DETECTION_URL, methods=["POST"])
def predict():
    if request.method != "POST":
        return jsonify({"message": "Invalid request method"})

    if request.files.get("image"):
        try:
            image_file = request.files["image"]
            image_bytes = image_file.read()
            img = Image.open(io.BytesIO(image_bytes))

            img = img.resize((640, 640))
            
            if img.mode != "L":
                img = img.convert("L")

            results = model(img, size=320)
            records = results.pandas().xyxy[0]
            data = [{"message": "Success", "label": label, "confidence": confidence} for label, _, confidence in zip(records["name"], records["xmin"], records["confidence"])]
            if data:
                return data[0]
            else:
                return jsonify({"message": "No objects detected"})
        except Exception as e:
            return jsonify({"message": "Error processing image", "error": str(e)})

    return jsonify({"message": "Invalid request"})
@app.route("/", methods=["GET"])
def explain_routes():
    routes = [
        {"path": DETECTION_URL, "method": "POST", "description": "Object detection endpoint"},
        # Add more routes as needed
    ]
    html = """
    <html>
    <head>
        <title>Routes</title>
    </head>
    <body>
        <h1>RSS Machine Learning API</h1>
        <table>
            <thead>
                <tr>
                    <th>Path</th>
                    <th>Method</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {0}
            </tbody>
        </table>
        <h2>Request and Response</h2>
        <p>The client can send an HTTP POST request to the <strong>{1}</strong> endpoint to perform object detection.</p>
        <p>The request in form-data should contain an image file in the <strong>image</strong> field.</p>
        <p>The server will process the image and return a response in JSON format.</p>
        <p>The response will include a JSON object with the detected object's label and confidence score.</p>
    </body>
    </html>
    """.format(
        "".join(
            "<tr><td>{0}</td><td>{1}</td><td>{2}</td></tr>".format(
                route["path"], route["method"], route["description"]
            )
            for route in routes
        ),
        DETECTION_URL
    )
    return html



if __name__ == '__main__':

    app.run()
else:
    application = app
