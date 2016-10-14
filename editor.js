

var EditArea = document.getElementById('EditArea');
var right = document.getElementById('right');

setInterval(function(){

    var str = EditArea.value;
    var html = parseTyperCN(str);
    right.innerHTML = html;

}, 1500);

// 0 13
function parseTyperCN(content){
    var content_html = content||'';
    var line_arr = content.split("\n"),
        line_obj = [],
        i,
        empty_line_count = 0,
        not_do_parse = false;
    for(i=0;i<line_arr.length;i++){
        var line = line_arr[i],
            this_obj = {};

        if(line == '？？？'){
            // 处理不需要解析的行
            not_do_parse = !not_do_parse;
            continue;
        }else{
            // 此行是否参与解析
            this_obj.not_do_parse = not_do_parse;
        }

        if(!this_obj.not_do_parse){
            if(line == ''){
                empty_line_count++;
                continue;
            }else{
                if(empty_line_count > 1){
                    // 前面有两空行的，标记为换两行
                    this_obj.before_padding = true;
                    empty_line_count = 0;
                }
            }
        }

        line_obj.push(this_obj);
    }

    return content_html;
}