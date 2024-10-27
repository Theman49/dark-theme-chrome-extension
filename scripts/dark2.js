(function () {
    const allStyles = document.head.querySelectorAll('style')
    allStyles.forEach((item) => {
        if(item.title === 'mydarktheme'){
            item.remove()
            console.log('removed')
        }
    })

    const style = document.createElement("style");
    style.textContent = `
    html * {
        background-color: #000000 !important;
        color: #eeeeee !important;
        font-weight: bold;
    }
    `;
    style.title = 'mydarktheme'
    document.head.appendChild(style);
    console.log('inserted');
})();
