// submit이벤트 발생시 유효성 검사
$('form').on('submit', function () 
{
    // ^[] : 첫문자 일치
    // []$ : 끝문자 일치
    // 영문자 : [a-zA-Z]
    // 숫자 : [0-9]
    // 숫자(3~4 글자) : \d{3,4}
    // 숫자(4 글자) : \d{4}
    // 특수문자 : [^a-zA-Z0-9]
    // + : 한번 이상 나옴
    // * : 0번 이상 나옴(한번도 안나올수도 있음)
    // . : 임의의 모든 문자 (숫자, 영문자, 특수문자)
    // ?= : 조건확인 후 처음으로 돌아감
    // 정규표현식.test(변수) : 변수값이 정규표현식 에 맞그염ㄴ true 맞지 않으면 false 값을 돌려주는 메서드
    
    // 아이디는 특수문자 포함하지 않으면, 영문자와 숫자만 허용하고 6글자 이상
    var idval = $('#idbox').val();
    var idcheck = /^[a-zA-Z0-9 ]+$/;

    if (!idcheck.test(idval) || idval.length < 6) 
    {
        alert("아이디는 특수문자는 혀용하지 않으며, 6글자 이상 입력해주세요.");
        $('#idbox').focus();

        return false;
    }

    // 비밀번호는 영문, 숫자 특수문자 중 3가지 이상 조합. 
    // 첫글자는 영어만 허용
    // ?= 조건확인후 처음 으로 돌아가라
    var paavalcheck = /^(?=[a-zA-Z])(?=.*[a-zA-Z0-9])(?=.*[0-9]).*$/
    var passval = $('#pwbox').val();
    var passvalok = $('#pwboxok').val();

    if ( !paavalcheck.test(passval) ) 
    {
        alert("비밀번호는 영문, 숫자, 특수문자 중 3가지 이상 조합하고, 첫글자는 반드시 영문이여야 합니다.");
        $('#pwbox').focus();
        return false;
    }
    else 
    {
        if (passvalok) 
        {
            if (passval !== passvalok) 
            {
                alert("비밀번호가 맞지 않습니다.");
                $('#pwbox').focus();
                return false;
            }
        } 
        else 
        {
            alert("비밀번호확인을 입력해주세요.");
            $('#pwbox').focus();
            return false;
        }
    }

    // 이름은 한글만 허용
    var irumval = $('#irum').val();
    var irumvalcheck = /^[가-힣]+$/

    if (!irumvalcheck.test(irumval)) 
    {
        alert("이름은 한글만 입력해주세요.");
        $('#irum').focus();
        return false;
    }

    // 전화번호는 가운데 번호는 3~4개 마지막 번호는 숫자 4개
    var hp1val = $('#hp1').val();
    var hp2val = $('#hp2').val();

    var hp1valcheck = /^\d{3,4}$/
    var hp2valcheck = /^\d{4}$/

    if ( !hp1valcheck.test(hp1val)) 
    {
        alert("전화번호를 다시 입력해주세요.");
        $('#hp1').focus();
        return false;
    }

    if ( !hp2valcheck.test(hp2val)) 
    {
        alert("전화번호를 다시 입력해주세요.");
        $('#hp2').focus();
        return false;
    }

    // 이메일
    var emailval = $('#emaildomain').val();
    var emailvalcheck = /^[a-zA-Z]+[\.][a-z]+([\.][a-z]+)*$/

    if (!emailvalcheck.test(emailval)) 
    {
        alert("이메일 형식에 맞지 않습니다.");
        $('#emaildomain').focus();
        return false;
    } 

    // 성별 체크
    if( !$('#male').prop('checked') && !$('#femaale').prop('checked'))
    {
        alert("성별을 선택 해주세요.");
        $('#male').focus();
        return false;
    }

    alert("회원가입에 성공하였습니다.");
    return false;// 프로그램 완성되면 삭제 
});

// 이메일 주소 입력상자에서 선택사자의 옵션을 변경했을때 
// 선택된 option의 value 값을 추출해서 : .val() 
// value값이 noselect가 아니고, slef가 아닌 경우
// #emaildomain 입력상자에 value 값을 쓰고, 비활성화 : .vla('쓸내용')
// value 값이 slef(직접입력) 인 경우에는 disabled를 false로 바꿔서 입력상자 활성화

$('#domainlist').on('change', function () 
{
    var value = $(this).find('option:selected').val();
    if (value !== 'noselect' && value !== 'self') 
    {
        $('#emaildomain').val(value).attr(
        {
            disabled: true
        });
    } 
    else if (value === 'self') 
    {
        $('#emaildomain').attr(
        {
            disabled: false
        }).val('');
    } 
    else 
    {
        $('#emaildomain').attr(
        {
            disabled: true
        }).val('');
    }
});

// 체크박스들 전체 선택으로 제어하기
$('.joinBox #all').on('click', function () 
{
    var check = $(this).prop('checked');

    // $('input[id^="co').prop({checked:check});
    $(this).siblings('input').prop({
        checked: check
    });
});

// 메모박스에 글씨 입력할떄 마다 남은 글자수 계산하기
var maxleng = 10;
$('.joinBox #memo').on('keyup', function () 
{
    var currleng = $(this).val().length;
    var remainleng = maxleng - currleng

    if (remainleng <= -1) {
        remainleng = 0
    }

    $(this).next().text(remainleng);
});