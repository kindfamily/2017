    $.fn.changeColor = function(){
        // 여러개의 셀렉터를 each로 전부 적용하기 this.each는 이벤트가 발생한 모든 엘리먼트들을(#clickDiv , #secondDiv)
        this.each(function(){
            //  $(this)는 순차적으로 #clickDiv, #secondDiv를 말함
            var $dom = $(this);
            $dom.click(function(){
                $dom.css("color", "red");
            });
        });
    };
    $(document).ready(function() {
        $('#clickDiv , #secondDiv').changeColor();
    });


// 외부에서는 <script type="text/javascript" src="jquery-changeColor.js"></script> 방식으로 불러오면 사용가능 
// jQuery같은 라이브러리들을 만드는 방법