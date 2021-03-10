const toDoForm = document.querySelector('.js-toDoForm'),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = "toDos";
const toDos = [];

function paintToDo(text) {
    //작성한 글을 li안에 넣어주는 역할을 하는 함수
    const li = document.createElement("li");
    const delBtn = document.createElement('button');
    delBtn.innerText ="❌" 
    // 버튼을 만든 것도 좋지만 이쁘게 하려면 a태그로 만들고 기능 추가 하는 것도 괜찮을 듯.
    const span = document.createElement("span");
    span.innerText = text;
    const newId = toDos.length + 1;
    //span 안에 text 인자 값을 넣는데 text 인자는 handleSubmit 함수에서 나옴. (input의 value 값)
    li.appendChild(delBtn);
    //li에 만든 버튼 추가
    li.appendChild(span);
    //li에 span 내용 추가
    li.id = newId;
    toDoList.appendChild(li);
    //그 모든 것이 추가된 li를 ul안에 추가
    const toDoObj = {
        text : text,
        id : newId
        //toDos의 배열이 빈 값이라 1을 더하면 id: 1 값이 1개 있으면 다음에 들어올 값은 2 즉 순서가 맞게 됨.
    }
    //text 값은 handleSubmit에서 찾을 수 있다(toDoInput.value)
    toDos.push(toDoObj);
}

function handleSubmit(e) {
    e.preventDefault();
    //handleSubmit 함수 실행을 위해 submit 잠시 정지
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    //paintToDo의 text 인자 값에 toDoInput.value 넣어줌.
    toDoInput.value="";
    //할 일을 계속 적어야 하기 때문에 todo를 입력해서 list에 추가한 후 다시 input은 빈 값으로 넣어 값을 쓸 수 있게 한다.
}


function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
        
    } else {

    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener('submit', handleSubmit);
    }

init();
