// 달력 생성
const makeCalendar = (date) => {
    // 현재 년도와 월 받아오기
    const currentYear = new Date(date).getFullYear();
    const currentMonth = new Date(date).getMonth() + 1;
  
    // 첫날의 요일 구하기 - 초기 시작위치를 위해서
    const firstDay = new Date(date.setDate(1)).getDay();
    // 마지막 날짜 구하기
    const lastDay = new Date(currentYear, currentMonth, 0).getDate();
  
    // 남은 박스만큼 다음달 날짜 표시
    const limitDay = firstDay + lastDay;
    const nextDay = Math.ceil(limitDay / 7) * 7;
  
    let htmlDummy = '';
  
    // 한달전 날짜 표시하기
    for (let i = 0; i < firstDay; i++) {
      htmlDummy += `<div class="noColor"></div>`;
    }
  
    // 이번달 날짜 표시하기
    for (let i = 1; i <= lastDay; i++) {    
      htmlDummy += `<div>${i}</div>`;
    } 
  
    // 다음달 날짜 표시하기
    for (let i = limitDay; i < nextDay; i++) {
      htmlDummy += `<div class="noColor"></div>`;
    }
  
    document.querySelector(`.dateBoard`).innerHTML = htmlDummy;
    document.querySelector(`.dateTitle`).innerText = `${currentYear}년 ${currentMonth}월`;
  }
  
  
  const date = new Date();
  
  makeCalendar(date);
  
  // 이전달 이동
  document.querySelector(`.prevDay`).onclick = () => {
  makeCalendar(new Date(date.setMonth(date.getMonth() - 1)));
  }
  
  // 다음달 이동
  document.querySelector(`.nextDay`).onclick = () => {
  makeCalendar(new Date(date.setMonth(date.getMonth() + 1)));
  }


  // 달력 생성
const makeCalendar2 = (date) => {
  // 현재 년도와 월 받아오기
  const currentYear2 = new Date(date).getFullYear();
  const currentMonth2 = new Date(date).getMonth() + 1;

  // 첫날의 요일 구하기 - 초기 시작위치를 위해서
  const firstDay2 = new Date(date.setDate(1)).getDay();
  // 마지막 날짜 구하기
  const lastDay2 = new Date(currentYear2, currentMonth2, 0).getDate();

  // 남은 박스만큼 다음달 날짜 표시
  const limitDay2 = firstDay2 + lastDay2;
  const nextDay2 = Math.ceil(limitDay2 / 7) * 7;

  let htmlDummy2 = '';

  // 한달전 날짜 표시하기
  for (let i = 0; i < firstDay2; i++) {
    htmlDummy2 += `<div class="noColor"></div>`;
  }

  // 이번달 날짜 표시하기
  for (let i = 1; i <= lastDay2; i++) {    
    htmlDummy2 += `<div>${i}</div>`;
  } 

  // 다음달 날짜 표시하기
  for (let i = limitDay2; i < nextDay2; i++) {
    htmlDummy2 += `<div class="noColor"></div>`;
  }

  document.querySelector(`.dateBoard2`).innerHTML = htmlDummy2;
  document.querySelector(`.dateTitle2`).innerText = `${currentYear2}년 ${currentMonth2}월`;
}


const date2 = new Date();

makeCalendar2(date2);

// 이전달 이동
document.querySelector(`.prevDay2`).onclick = () => {
makeCalendar2(new Date(date2.setMonth(date2.getMonth() - 1)));
}

// 다음달 이동
document.querySelector(`.nextDay2`).onclick = () => {
makeCalendar2(new Date(date2.setMonth(date2.getMonth() + 1)));
}
