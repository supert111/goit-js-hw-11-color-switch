const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
  let timerId = null;
  
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
  const startBtnRef = document.querySelector('button[data-action="start"]');
  const stopBtnRef = document.querySelector('button[data-action="stop"]');
  const bodyRef = document.querySelector('body');
  
  startBtnRef.addEventListener('click', changeBackground);
  stopBtnRef.addEventListener('click', stopBackground);
  
  //функция меняет цвет и устанавливает интервал 1сек;
  function changeBackground () {
    stopBtnRef.addEventListener('click', stopBackground);
    //startBtnRef.removeEventListener('click', changeBackground);
    //кнопка неактивна;
    startBtnRef.disabled = true;
    const colorsBodyMax = colors.length;
    timerId = setInterval(() => {
    bodyRef.style.background = colors[randomIntegerFromInterval(0, colorsBodyMax)];
    },1000);
  };
  //функция удаляет setInterval;
  function stopBackground () {
    startBtnRef.addEventListener('click', changeBackground);
    //кнопка активна;
    startBtnRef.disabled = false;
    stopBtnRef.removeEventListener('click', stopBackground);
    clearInterval(timerId);
  }