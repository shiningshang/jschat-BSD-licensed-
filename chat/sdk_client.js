var scripts=document.getElementsByTagName("script");var curr=scripts[scripts.length-1];var args=getArgs(curr.src.replace(/.*\?/,''));function getArgs(query){var args={};var pairs=query.split("&");for(var i=0;i<pairs.length;i++){var pos=pairs[i].indexOf('=');if(pos==-1)continue;var argname=pairs[i].substring(0,pos);var value=pairs[i].substring(pos+1);value=decodeURIComponent(value);args[argname]=value}return args}var client="<link rel=\"stylesheet\" href=\"css/chatClient.css\" type=\"text/css\" /><script src=\"js/jquery-latest.js\"></script><script src=\"js/client.js\" charset='gbk'></script><div class=\"chat_box\"><div class=\"hd_box\"><div class=\"hd_con_lf\"><span class=\"chat_name\"><a class=\"userName\">�οͣ����ã�</a></span></div><div class=\"hd_con_rt\"><a class=\"hd_icon icon_min\"></a> <a class=\"hd_icon icon_close\"></a></div></div><div class=\"bd_box\"><div class=\"chat_list\"><div></div></div><div class=\"chat_sendbox fix\"><div class=\"chat_tools fix\"><div class=\"tools_lf\"></div><div class=\"tools_rt\"><input class=\"history\" type=\"button\" value=\"��ʷ��¼\" /></div></div><div class=\"chat_send_ipt\"><textarea class=\"ipt_area\"></textarea></div><div class=\"chat_send_btn\"><input class=\"btn chat_submit\" type=\"button\" value=\"����\" /></div></div></div></div>";document.write(client);