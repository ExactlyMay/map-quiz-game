$(document).ready(function(){
    $('#quizModal').modal('hide')

    $('.map').on('click', 'path', consoleObject);

    $(function () {
        $(".mapcontainer").mapael({
            map: {
                name: "usa_states"
                , zoom: {
                    enabled: true,
                    maxLevel: 20
                }
                , defaultArea: {
                    attrs: {
                        fill: "#f4f4e8"
                        , stroke: "#ced8d0"
                    }
                    , attrsHover: {
                        fill: "#a4e100"
                    }
                }
            },
            legend: {
                plot: {
                    title: "American cities",
                    slices: [{
                        label: "Value 1",
                        sliceValue: "Value 1",
                        type: "svg",
                        path: "M 24.267286,27.102843 15.08644,22.838269 6.3686216,27.983579 7.5874348,17.934248 0,11.2331 9.9341158,9.2868473 13.962641,0 l 4.920808,8.8464793 10.077199,0.961561 -6.892889,7.4136777 z",
                        width: 30,
                        height: 30,
                        attrs: {
                            fill: "#8AD12C"
                        },
                        clicked: true
                    }, {
                        label: "Value 2",
                        sliceValue: "Value 2",
                        type: "svg",
                        path: "M 24.267286,27.102843 15.08644,22.838269 6.3686216,27.983579 7.5874348,17.934248 0,11.2331 9.9341158,9.2868473 13.962641,0 l 4.920808,8.8464793 10.077199,0.961561 -6.892889,7.4136777 z",
                        width: 30,
                        height: 30,
                        attrs: {
                            fill: "#D12C2C"
                        }
                    }]
                }
            },
            plots: {
                'atl': {
                    latitude: 33.7490,
                    longitude: 84.3880,
                    tooltip: {content: "Atlanta"},
                    value: "Value 2"
                },
                'ny': {
                    latitude: 40.717079,
                    longitude: -74.00116,
                    tooltip: {content: "New York"},
                    value: "Value 1"
                },
                'an': {
                    latitude: 61.2108398,
                    longitude: -149.9019557,
                    tooltip: {content: "Anchorage"},
                    value: "Value 2"
                },
                'sf': {
                    latitude: 37.792032,
                    longitude: -122.394613,
                    tooltip: {content: "San Francisco"},
                    value: "Value 1"
                },
                'pa': {
                    latitude: 19.493204,
                    longitude: -154.8199569,
                    tooltip: {content: "Pahoa"},
                    value: "Value 2"
                },
                'la': {
                    latitude: 34.025052,
                    longitude: -118.192006,
                    tooltip: {content: "Los Angeles"},
                    value: "Value 1"
                },
                'dallas': {
                    latitude: 32.784881,
                    longitude: -96.808244,
                    tooltip: {content: "Dallas"},
                    value: "Value 2"
                },
                'miami': {
                    latitude: 25.789125,
                    longitude: -80.205674,
                    tooltip: {content: "Miami"},
                    value: "Value 2"
                },
                'washington': {
                    latitude: 38.905761,
                    longitude: -77.020746,
                    tooltip: {content: "Washington"},
                    value: "Value 2"
                },
                'seattle': {
                    latitude: 47.599571,
                    longitude: -122.319426,
                    tooltip: {content: "Seattle"},
                    value: "Value 1"
                }
            }
        });
    });

});


function consoleObject(){
    console.log("$(this).attr('data-id'): " + $(this).attr("data-id"));
    var state = $(this).attr("data-id");
    $('#quizModal').modal('show');
    $('#quizTitle').html("This is the " + state + " quiz!");
}