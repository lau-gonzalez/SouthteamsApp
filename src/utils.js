export const filterCards = (data, searchValue) => {
  const value = searchValue.toLowerCase();
  const newCards = data.filter(
    (card) =>
      card.name.first.toLowerCase().includes(value) ||
      card.name.last.toLowerCase().includes(value) ||
      card.email.toLowerCase().includes(value) ||
      card.location.city.toLowerCase().includes(value) ||
      card.location.state.toLowerCase().includes(value) ||
      card.phone.toLowerCase().includes(value)
  );

  return newCards;
};

const orderDescending = (sortBy, data) => {
  if (sortBy === "name") {
    return data.sort((a, b) => {
      if (a.name.first > b.name.first) {
        return -1;
      }

      if (a.name.first < b.name.first) {
        return 1;
      }

      return 0;
    });
  }

  if (sortBy === "city") {
    return data.sort((a, b) => {
      if (a.location.city > b.location.city) {
        return -1;
      }

      if (a.location.city < b.location.city) {
        return 1;
      }

      return 0;
    });
  }

  return data.sort((a, b) => {
    if (a[sortBy] > b[sortBy]) {
      return -1;
    }

    if (a[sortBy] < b[sortBy]) {
      return 1;
    }

    return 0;
  });
};

const orderAscending = (sortBy, data) => {
  if (sortBy === "name") {
    return data.sort((a, b) => {
      if (a.name.first > b.name.first) {
        return 1;
      }

      if (a.name.first < b.name.first) {
        return -1;
      }

      return 0;
    });
  }

  if (sortBy === "city") {
    return data.sort((a, b) => {
      if (a.location.city > b.location.city) {
        return 1;
      }

      if (a.location.city < b.location.city) {
        return -1;
      }

      return 0;
    });
  }

  return data.sort((a, b) => {
    if (a[sortBy] > b[sortBy]) {
      return 1;
    }

    if (a[sortBy] < b[sortBy]) {
      return -1;
    }

    return 0;
  });
};

export const sortData = (sortBy, order, data) =>
  order === "descending"
    ? orderDescending(sortBy, data)
    : orderAscending(sortBy, data);
