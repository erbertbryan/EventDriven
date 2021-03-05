let mstring = ''
let con_arr = []
var m_prompt, d_prompt;
m_prompt = prompt("Month (1-12)")
d_prompt = prompt("Start Day (1-7)")

function createCalendar(elem, m, d) {
    var m_labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], 
    d_labels = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    for (i = 1; i < 13; i++) {
        if (m == i){
          mstring = m_labels[i-1];
        }
      }
    var i;
    let a = 1
    let cal_num = 1
    let blank_count = 0
    let d2 = new Date(m,d);
    let table = `<table><tr><td align = "center" colspan = "12"id="m"><b>${mstring}</b></tr></td><tr><th>SU</th><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th></tr>`
    //let table = `<table><tr><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th><th>SU</th></tr><tr>`;
    if (m > 12 || m <=0 || d > 7 || d <=0) {
        elem.innerHTML = ("<h1>Invalid Input</h1>")
    }
    else {
        var d_num = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        for (let i = 0; i < d_num[m - 1]; i++) {
            con_arr[i] = d_labels[(d + i) % 7]
        }
        if (d_num[m - 1] != 28) {
            if (d_num[m - 1] == 30) {
                if (d > 6) {
                    for (let i = 0; i < 42; i++) {
                        if (blank_count == 0) {
                            table += '<tr>'
                        }
                        if (a <= d - 1) {
                            table += "<td></td>"
                            a++
                        }
                        else if (cal_num > d_num[m - 1])
                            table += "<td></td>"
                        else {
                            if (cal_num <= d_num[m - 1]) {
                                table += `<td>${cal_num}</td>`
                                cal_num++
                            }
                            else
                                table += "<td></td>"
                        }
                        if (blank_count == 6) {
                            table += '</tr>'
                            blank_count = 0
                        }
                        else {
                            blank_count++
                        }
                    }
                }
                else {
                    for (let i = 0; i < 35; i++) {
                        if (blank_count == 0) {
                            table += '<tr>'
                        }
                        if (a <= d - 1) {
                            table += "<td></td>"
                            a++
                        }
                        else if (cal_num > d_num[m - 1])
                            table += "<td></td>"
                        else {
                            if (cal_num <= d_num[m - 1]) {
                                table += `<td>${cal_num}</td>`
                                cal_num++
                            }
                            else
                                table += "<td></td>"
                        }
                        if (blank_count == 6) {
                            table += '</tr>'
                            blank_count = 0
                        }
                        else {
                            blank_count++
                        }
                    }
                }
            }
            //add space
            else if (d_num[m - 1] == 31) {
                if (d > 5) {
                    for (let i = 0; i < 42; i++) {
                        if (blank_count == 0) {
                            table += '<tr>'
                        }
                        if (a <= d - 1) {
                            table += "<td></td>"
                            a++
                        }
                        else if (cal_num > d_num[m - 1])
                            table += "<td></td>"
                        else {
                            if (cal_num <= d_num[m - 1]) {
                                table += `<td>${cal_num}</td>`
                                cal_num++
                            }
                            else
                                table += "<td></td>"
                        }
                        if (blank_count == 6) {
                            table += '</tr>'
                            blank_count = 0
                        }
                        else {
                            blank_count++
                        }
                    }
                }
                //add space
                else {
                    for (let i = 0; i < 35; i++) {
                        if (blank_count == 0) {
                            table += '<tr>'
                        }
                        if (a <= d - 1) {
                            table += "<td></td>"
                            a++
                        }
                        else if (cal_num > d_num[m - 1])
                            table += "<td></td>"
                        else {
                            if (cal_num <= d_num[m - 1]) {
                                table += `<td>${cal_num}</td>`
                                cal_num++
                            }
                            else
                                table += "<td></td>"
                        }
                        if (blank_count == 6) {
                            table += '</tr>'
                            blank_count = 0
                        }
                        else {
                            blank_count++
                        }
                    }
                }
            }
        }
        else {
            if (d >= 2) {
                for (let i = 0; i < 35; i++) {
                    if (blank_count == 0) {
                        table += '<tr>'
                    }
                    if (a <= d - 1) {
                        table += "<td></td>"
                        a++
                    }
                    else if (cal_num > d_num[m - 1])
                        table += "<td></td>"
                    else {
                        if (cal_num <= d_num[m - 1]) {
                            table += `<td>${cal_num}</td>`
                            cal_num++
                        }
                        else
                            table += "<td></td>"
                    }
                    if (blank_count == 6) {
                        table += '</tr>'
                        blank_count = 0
                    }
                    else {
                        blank_count++
                    }
                }
            }
            else {
                for (let i = 0; i < 28; i++) {
                    if (blank_count == 0) {
                        table += '<tr>'
                    }

                    if (a <= d - 1) {
                        table += "<td></td>"
                        a++
                    }
                    else if (cal_num > d_num[m - 1])
                        table += "<td></td>"
                    else {
                        if (cal_num <= d_num[m - 1]) {
                            table += `<td>${cal_num}</td>`
                            cal_num++
                        }
                        else
                            table += "<td></td>"
                    }
                    if (blank_count == 6) {
                        table += '</tr>'
                        blank_count = 0
                    }
                    else {
                        blank_count++
                    }
                }
            }
        }
        table += '</table>'
        elem.innerHTML = table;
        return con_arr
    }
}
createCalendar(container, m_prompt, d_prompt)