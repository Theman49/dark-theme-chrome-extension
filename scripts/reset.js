(function () {
    const allStyles = document.head.querySelectorAll('style')
    allStyles.forEach((item) => {
        if(item.title === 'mydarktheme'){
            item.remove()
            console.log('removed')
        }
    })
})();
