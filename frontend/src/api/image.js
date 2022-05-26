import { apiImgInstance } from "api";

const imgapi = apiImgInstance();

//이미지 업로드
async function uploadImage(formData, success, fail) {
    await imgapi.post("/s3/upload", formData).then(success).catch(fail);
}

export {uploadImage};