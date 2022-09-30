

function getShows(group, data) {
    var list = data.filter((e) => {
        var show = true;
        if (group.filter == "rating") {
            if (e.rating && +e.rating.average < 8.5) show = false;
        }
        if (group.filter == "genre") {
            if (!e.genres.includes(group.genre ?? group.title)) show = false;
        }
        return show;
    });

    list = list.sort((a, b) => {
        if (a.weight > b.weight) return -1;
        else return 1;
    });

    list = list.slice(0, 25);

    return list;
}

function image(show, hd) {
    if (show.image && show.image.medium) {
        if (hd) return show.image.original;
        return show.image.medium;
    }
    return "https://via.placeholder.com/1080x1920";
}


export default function (app, inject) {
    inject('getShows', getShows)
    inject('image', image)

    return {
        getShows, image
    }
}