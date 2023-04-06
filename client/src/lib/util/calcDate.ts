// mm.dd 형식으로 Date 계산
export const calcDate = (date: string) => {
  if (date) {
    const month = date.split("-")[1];
    const day = date.split("-")[2].split("T")[0];
    return `${month}.${day}`;
  }
};

export const calcToday = (date: Date) => {
  if (date) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}.${day}`;
  }
};
