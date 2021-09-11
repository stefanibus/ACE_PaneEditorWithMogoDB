// The below code only added new issues
// but did not solve the loding-isse on (never stops loading) http://localhost:3000/_next/webpack-hmr?page=/
// only added a new issue with caching fsevents in chokidar
// https://nextjs.org/docs/messages/webpack5
// the only workaround I found was to block that network request clientside : https://content.screencast.com/users/stefanibus/folders/Capture/media/07c27686-0a34-4f1a-9679-6929002dc0f8/LWR_Recording.png

module.exports = {
  future: {
    webpack5: false,
  },
};
