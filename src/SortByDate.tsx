import Transactions from "./components/Transaction";


const transactionsData = [
    {
        id: "2IyWT7qnjK65pbiATPJY",
        comments: "hello",
        reciever_name: "hello",
        date: "2024-06-25T18:30:00.000Z",
        amount: 212
    },
    {
        id: "4qpDj6rQELcYHMDSum7E",
        reciever_name: "hello",
        date: "2024-06-25T18:30:00.000Z",
        comments: "hello",
        amount: 545
    },
    {
        id: "B3z0Oedt4Ie5ZSlQfqlY",
        amount: 133,
        date: "2024-06-25T18:30:00.000Z",
        comments: "jkd",
        reciever_name: "helo"
    },
    {
        id: "XoaAu8j7CfwltoyljKjs",
        comments: "no comments",
        amount: 2222,
        date: "2024-06-10T18:30:00.000Z",
        reciever_name: "hello"
    },
    {
        id: "ZIRlhZzOYksXzkKAmkW1",
        date: "2024-06-25T18:30:00.000Z",
        amount: 733,
        reciever_name: "chirag",
        comments: "hekki helloo thsd"
    },
    {
        id: "fu6WrV7bn92i1QssXOhn",
        reciever_name: "MAuli",
        comments: "lunch",
        amount: 80,
        date: "2024-06-10T18:30:00.000Z"
    },
    {
        id: "mGHDwITcJe1is1kOn20i",
        comments: "dgyadhf",
        date: "2024-06-25T18:30:00.000Z",
        amount: 144,
        reciever_name: "chierag"
    },
    {
        id: "oXzgC2Co0ANsltNTkvCO",
        date: "2024-06-03T18:30:00.000Z",
        amount: 24,
        reciever_name: "helloo",
        comments: "na"
    },
    {
        id: "r7iloXKGpWbOyR3aGCOn",
        comments: "Tea",
        date: "2024-06-10T18:30:00.000Z",
        reciever_name: "NA",
        amount: 10
    },
    {
        id: "tQpCsK02zle0GFDOSeSx",
        reciever_name: "chirag",
        date: "2024-06-25T18:30:00.000Z",
        comments: "ajdkasn",
        amount: 266
    }
];

const SortByDate = () => {
    return (
        <div>
            <h1>Transactions</h1>
            <Transactions transactions={transactionsData} />
        </div>
    );
};

export default SortByDate;
