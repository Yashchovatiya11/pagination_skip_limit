var user_model = require('../model/usermodel');

exports.user_modal = async (req, res) => {
    var data = await user_model.find({ email: req.body.email });
    if (data.length == 1) {

        res.status(200).json({
            status: 'user is already registeres'
        })
    }
    else {

        for (let i = 0; i < 100; i++) {

            req.body.user_no = i;

            var data = await user_model.create(req.body);
        }
        res.status(200).json({
            status: 'registerd success',
            data
        });
    }

}


exports.select_recored = async (req, res) => {

    // var data_user = (+req.query.page - 1) * 10;
    var data_user = (+req.query.page - 1) * 5;

    var data = await user_model.find().skip(data_user).limit(5);


    res.status(200).json({
        status: 'registerd success',
        data
    });

};



