for (let i = 0; i <= 50; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        console.log('Great Job');
    }
    else if (i % 3 == 0) {
        console.log('foo');
    }
    else if (i % 5 == 0) {
        console.log('foooo');
    }

    else {
        console.log(i);
    }
}