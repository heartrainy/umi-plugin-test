// ref:
// - https://umijs.org/plugin/develop.html

export default function (api, options) {

  api.onBuildSuccess(({ stats }) => {
    console.log('2222222')
  });
}
