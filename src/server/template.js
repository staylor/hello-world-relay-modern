import Helmet from 'react-helmet';

export default (vo) => {
  const helmet = Helmet.renderStatic();

  return `
<!DOCTYPE html>
<html ${helmet.htmlAttributes.toString()}>
<head>
${helmet.title.toString()}${helmet.meta.toString()}${helmet.link.toString()}
${vo.cssBundle ? `<link rel="stylesheet" type="text/css" href="${vo.cssBundle}" />` : ''}
</head>
<body ${helmet.bodyAttributes.toString()}>
<div id="root">${vo.root}</div>
<script src="${vo.jsBundle}"></script>
</body>
</html>`;
};
