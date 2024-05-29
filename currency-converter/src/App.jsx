import { useState, useEffect } from 'react';
import InputBox from './Component/InputBox';
import useCurrencyinfo from './hooks/useCurrencyInfo';

function App() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [convertedAmount, setConvertedAmount] = useState(0);

    const fromCurrencyInfo = useCurrencyinfo(from);
    const toCurrencyInfo = useCurrencyinfo(to);

    const fromOptions = Object.keys(fromCurrencyInfo);
    const toOptions = Object.keys(toCurrencyInfo);

    const swap = () => {
        setFrom(to);
        setTo(from);
        setConvertedAmount(amount * fromCurrencyInfo[to] || 0);
    };

    const convert = () => {
        if (amount && fromCurrencyInfo[to]) {
            setConvertedAmount(amount * fromCurrencyInfo[to]);
        } else {
            setConvertedAmount(0);
        }
    };

    useEffect(() => {
        // Update conversion whenever amount or currency changes
        convert();
    }, [amount, from, to]);

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url("https://img.freepik.com/free-vector/digital-rupee-concept-background-with-rupee-symbol_1017-36812.jpg?t=st=1710354971~exp=1710358571~hmac=85c75eed0824bc310b392a9912e8a8b1f2408fd5125a71b203ae43804e8ddb66&w=1060")`
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-xl bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOption={fromOptions}
                                onCurrencyChange={(currency) => setFrom(currency) }
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOption={toOptions}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
