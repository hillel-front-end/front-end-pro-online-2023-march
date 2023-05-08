function getPicture(thumbnail) {
  thumbnail = thumbnail
    ? thumbnail
    : "https://40.media.tumblr.com/2a46a0ec64f5d1c0dcc8814baf9833f4/tumblr_nj930lpXGB1qif4c6o1_1280.jpg";

  return `
          <img
              src="${thumbnail}"
              alt=""
              class="image"
          />
      `;
}

export default getPicture;


export const a = 12;