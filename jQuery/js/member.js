$(function(){
    $('#join').submit(function(){
        var user_id = $('input[name="user_id"]').val();
        var user_pw = $('input[name="user_pw"]').val();
        if(!user_id){
            alert('아이디를 입력해주세요.');
            $('input[name="user_id"]').focus();
            return false;
        }

        if(!user_pw){
            alert('비밀번호를 입력해주세요.')
            $('input[name="user_pw"]').focus();
            return false;
        }

        if( !$('input[name="gender"]').is(':checked') ){
            alert("성별을 선택해 주세요.");
            //radio는 배열로 받는다
            //document.form1.gender[0].checked = true;
            $('input[name="gender"]:eq(0)').attr('checked', true);
            return false;
        }

        var email = $('input[name="email"]').val();
        if(!email){
            alert('이메일을 입력해주세요.');
            $('input[name="email"]').focus();
            return false;
        }

        var url = $('input[name="url"]').val();
        if(!url){
            alert('url을 입력해주세요.');
            $('input[name="url"]').focus();
            return false;
        }

        var phone = $('input[name="phone"]').val();
        if(!phone){
            alert('phone을 입력해주세요.');
            $('input[name="phone"]').focus();
            return false;
        }

        if( !$('input[name="hobby"]').is(':checked')){
            alert("취미를 선택하세요.");
            $('input[name="hobby"]:eq(0)').attr('checked', true);
            return false;
        }

        if( $('select[name="job"] option:selected').index() == 0 ){
            alert("직업을 선택하세요.");
            $('select[name="job"] option:eq(2)').attr('selected', true);
            return false;
        }

        //입력한 내용을 화면에 출력
        var gender = $('input[name="gender"]:checked').val();

        var hobby = $('input[name="hobby"]:checked');
        var hobby_val = " ";
        hobby.each(function(){
            hobby_val += $(this).val() + " ";
        });

        var job = $('select[name="job"] option:selected').val(); //select 에서 선택할 값을 job에 넣기

        var result = '<ul>' 
                    + '<li> 아이디 : ' + user_id + '</li>' 
                    + '<li> 비밀번호 : ' + user_pw + '</li>' 
                    + '<li> 성별 : ' + gender + '</li>' 
                    + '<li> 이메일 : ' + email + '</li>' 
                    + '<li> URL : ' + url + '</li>' 
                    + '<li> 핸드폰 : ' + phone + '</li>' 
                    + '<li> 취미 : ' + hobby_val + '</li>' 
                    + '<li> 직업 : ' + job + '</li>'                     
                    + '</ul>';

         var result2 = `<ul> 
                     <li> 아이디 :  ${user_id}   </li> 
                     <li> 비밀번호 :   ${user_pw}  </li> 
                     <li> 성별 :   ${gender}  </li> 
                     <li> 이메일 :   ${email}  </li> 
                     <li> URL :   ${url}  </li> 
                     <li> 핸드폰 :   ${phone}  </li> 
                     <li> 취미 :   ${hobby_val}  </li> 
                     <li> 직업 :   ${job}  </li>                     
                     </ul>`;

        $('body').html(result2);

        return false;
    });


});