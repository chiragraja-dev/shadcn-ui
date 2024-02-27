import React from 'react';

const NumberToWordsConverter = () => {
    const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen',];
    const tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety',];

    const convertNumberToWords = (num: number): string => {
        if (num === 0) {
            return 'Zero';
        }

        if (num < 0) {
            return 'Minus ' + convertNumberToWords(Math.abs(num));
        }

        let words = '';

        if (Math.floor(num / 1000) > 0) {
            words += convertNumberToWords(Math.floor(num / 1000)) + ' Thousand ';
            num %= 1000;
        }

        if (Math.floor(num / 100) > 0) {
            words += ones[Math.floor(num / 100)] + ' Hundred ';
            num %= 100;
        }

        if (num >= 10 && num <= 19) {
            words += teens[num - 10];
        } else if (num >= 20) {
            words += tens[Math.floor(num / 10)];
            if (num % 10 > 0) {
                words += ' ' + ones[num % 10];
            }
        } else if (num > 0) {
            words += ones[num];
        }

        return words;
    };

    return (
        <div>
            <h1>Number to Words Converter</h1>
            <p>Number: 123</p>
            <p>Words: {convertNumberToWords(10000000)}</p>
        </div>
    );
};

export default NumberToWordsConverter;
