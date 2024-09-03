let selectNav = document.querySelector('#productos');

selectNav.addEventListener('change', function() {
    let value = selectNav.value;
    let url = 'pages/' + value + '.html';
    window.location.href = url;
    console.log('url', url);
});
