function monthPrinter(m) {
    m === 1 ? console.log(`January`) :
        m === 2 ? console.log(`February`) :
            m === 3 ? console.log(`March`) :
                m === 4 ? console.log(`April`) :
                    m === 5 ? console.log(`May`) :
                        m === 6 ? console.log(`June`) :
                            m === 7 ? console.log(`July`) :
                                m === 8 ? console.log(`August`) :
                                    m === 9 ? console.log(`September`) :
                                        m === 10 ? console.log(`October`) :
                                            m === 11 ? console.log(`November`) :
                                                m === 12 ? console.log(`December`) :
                                                 m <= 0 || m >= 13? console.log(`Error!`): null;                                                   
}
monthPrinter(15)