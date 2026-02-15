from tensorflow.keras.models import load_model

print("Loading model...")

model = load_model("model.h5", compile=False)

print("✅ Model Loaded Successfully!")
model.summary()