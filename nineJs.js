  let str = '<div class="begin"><span class="lineUp"></span><p class="txt">九九乘法表</p><p class="txt2">MULTIPLICATIONCHART</p><span class="lineDown"></span></div>'
        let content = document.querySelector('.content')
        let table = document.querySelectorAll('h2')

        for (let i = 2; i < 10; i++) {
            str += '<div class="test box' + i + '">' + " <h2> " + i + "</h2 > "
            for (let j = 1; j < 10; j++) {
                str += "<p class='paper'>" + i + "x" + j + "=" + i * j + "</p>"
            }

            str += '</div>'
        }
        console.log(str)
        content.innerHTML = str
