_.register({
  rule: {
    host: [
      /^imghost\.(top|club)$/,
      /^corepix\.org$/,
      /^somnath2003\.xyz$/,
      /^(www\.)?xxximagetpb\.org$/,
      /^pornbaker\.men$/,
    ],
    path: /^\/image\/.+$/,
  },
  async ready () {
    const i = $('input#embed-code-2.text-input').getAttribute('value');
    await $.openImage(i);
  },
});