// static/script.js

// 예시 학생 데이터 목록
// 실제 서비스에서는 이 데이터를 서버나 DB에서 가져오도록 변경하세요.
const students = [
  {
    studentNumber: '20241234',
    studentName: '홍길동',
    accountId: 'hong.gildong@school.edu',
    accountPw: 'kdldms123!'
  },
  {
    studentNumber: '20241235',
    studentName: '이영희',
    accountId: 'lee.younghee@school.edu',
    accountPw: 'yhlee2024'
  },
  {
    studentNumber: '20241236',
    studentName: '김철수',
    accountId: 'kim.cheolsu@school.edu',
    accountPw: 'csKIM!456'
  }
  {
    studentNumber: '20241237',
    studentName: '장영윤',
    accountId: 'jeroing7',
    accountPw: 'secret'
  }
  // 필요에 따라 여기에 다른 학생 데이터를 추가하세요.
];

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('search-form');
  const inputNumber = document.getElementById('student-number');
  const inputName = document.getElementById('student-name');
  const resultSection = document.getElementById('result');
  const accountIdSpan = document.getElementById('account-id');
  const accountPwSpan = document.getElementById('account-pw');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // 폼 제출 기본 동작 막기

    const enteredNumber = inputNumber.value.trim();
    const enteredName = inputName.value.trim();

    // 입력값이 비어 있는지 간단히 체크
    if (!enteredNumber || !enteredName) {
      alert('학번과 이름을 모두 입력해주세요.');
      return;
    }

    // students 배열에서 일치하는 학생 찾기
    const matched = students.find(student => 
      student.studentNumber === enteredNumber && student.studentName === enteredName
    );

    if (matched) {
      // 결과 영역에 ID, PW 채우기
      accountIdSpan.textContent = matched.accountId;
      accountPwSpan.textContent = matched.accountPw;
      resultSection.classList.remove('hidden');
    } else {
      // 일치하는 정보가 없으면 알림 후 결과 숨김
      alert('일치하는 학생 정보를 찾을 수 없습니다.');
      accountIdSpan.textContent = '';
      accountPwSpan.textContent = '';
      resultSection.classList.add('hidden');
    }

    // 검색 후 폼을 초기화하지 않고, 결과만 업데이트합니다.
    // 만약 검색 후 입력칸을 비우고 싶으면 아래 주석을 해제하세요:
    // form.reset();
  });
});
