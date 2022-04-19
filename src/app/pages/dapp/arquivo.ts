import { load } from './functions.js';

const Home: NextPage = () => {

  const [input, setInput] = React.useState<string>('');
  const [refresh, setRefresh] = React.useState<boolean>(true);
  const [addressAccount, setAddresAccount] = React.useState<any>(null);
  const [contract, setContract] = React.useState<any>(null);
  const [tasks, setTasks] = React.useState<any[]>([]);


  // React useEffect

  React.useEffect(() => {
    if (!refresh) return;
    setRefresh(false);
    load().then((e) => {
      setAddresAccount(e.addressAccount);
      setTasks(e.tasks);
      setContract(e.todoContract);
    });
  });
