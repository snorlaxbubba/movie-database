function isFav(array, path, id) {

    if( path === '/favorites'){
        return true;
    }

    if ( array.length === 0 ) {
        return false;
    }

    return array.some( (obj) => obj.id === id);

}

export default isFav;