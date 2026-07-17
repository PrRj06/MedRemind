import api from "../lib/axios";

export async function getDoctorProfileRequest() {
  const response = await api.get("/doctors/me");
  return response.data;
}

export async function updateDoctorProfileRequest(payload) {
  const response = await api.patch("/doctors/me", payload);
  return response.data;
}
