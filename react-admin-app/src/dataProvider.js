import fakeDataProvider from 'ra-data-fakerest';

const dataProvider = fakeDataProvider({
  users: [
    { id: 1, username: 'teste', role: 'admin' },
  ],
});

export default dataProvider;
