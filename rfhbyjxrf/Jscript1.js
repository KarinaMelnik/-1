
    function show_text() {
        //alert('hi');
        var c1_elem = document.getElementById("c1");
        var c2_elem = document.getElementById("c2");
        var c3_elem = document.getElementById("c3");
        c1_elem.style.display = 'Block';
        c2_elem.style.display = 'none';
        c3_elem.style.display = 'none';
    }
    function show_text1() {
        var c1_elem = document.getElementById("c1");
        var c2_elem = document.getElementById("c2");
        var c3_elem = document.getElementById("c3");
        c1_elem.style.display = 'none';
        c2_elem.style.display = 'Block';
        c3_elem.style.display = 'none';
    }
    function show_text2() {
        var c1_elem = document.getElementById("c1");
        var c2_elem = document.getElementById("c2");
        var c3_elem = document.getElementById("c3");
        c1_elem.style.display = 'none';
        c2_elem.style.display = 'none';
        c3_elem.style.display = 'Block';
    }
    function check() {
        q1elem = document.getElementById('q1');
        //        if (q1elem.checked) { alert("yes") } else { alert("no") };
        g3e = document.getElementById("g3");
        answer = g3e.value;
        if (answer == "48") {
            alert("YES");
        } else {
            alert("Вы уверены,что " + answer + "?")
        }
    }
-->