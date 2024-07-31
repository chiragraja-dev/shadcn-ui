import React from 'react';

interface Transaction {
    id: string;
    comments: string;
    reciever_name: string;
    date: string;
    amount: number;
}

interface GroupedTransactions {
    [key: string]: Transaction[];
}

const groupByDate = (transactions: Transaction[]): GroupedTransactions => {
    return transactions.reduce((groups, transaction) => {
        const date = transaction.date;
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(transaction);
        return groups;
    }, {} as GroupedTransactions);
};

const Transactions: React.FC<{ transactions: Transaction[] }> = ({ transactions }) => {
    const groupedTransactions = groupByDate(transactions);

    return (
        <div>
            {Object.keys(groupedTransactions).map((date) => (
                <div key={date}>
                    <h2>Date: {date}</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Amount</th>
                                <th>Receiver Name</th>
                                <th>Comments</th>
                            </tr>
                        </thead>
                        <tbody>
                            {groupedTransactions[date].map((transaction) => (
                                <tr key={transaction.id}>
                                    <td>{transaction.amount}</td>
                                    <td>{transaction.reciever_name}</td>
                                    <td>{transaction.comments}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default Transactions;
