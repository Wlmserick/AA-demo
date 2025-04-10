import {onCall, CallableRequest} from "firebase-functions/v2/https";
import * as admin from "firebase-admin";

admin.initializeApp();

export const sendNotification = onCall(
  async (
    request: CallableRequest<{title: string; body: string; token: string}>
  ) => {
    const {title, body, token} = request.data;

    if (!request.auth) {
      throw new Error("Authentication is required to send notifications.");
    }

    if (!title || !body || !token) {
      throw new Error("Missing required fields: title, body, or token.");
    }

    const message = {
      notification: {
        title,
        body,
      },
      token,
    };

    try {
      const response = await admin.messaging().send(message);
      return {success: true, response};
    } catch (error) {
      console.error("Error sending notification:", error);
      throw new Error("Failed to send notification.");
    }
  }
);
