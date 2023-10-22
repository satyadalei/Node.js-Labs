let arrayData = [
    {
        "profilePic": {
            "givenName": "IMG20230805203105.jpg2023-09-10T10:57:56.793ZoB6P4RBHaWOF",
            "url": "https://firebasestorage.googleapis.com/v0/b/igit-mca-web.appspot.com/o/images%2FprofileImages%2F41%2FIMG20230805203105.jpg2023-09-10T10%3A57%3A56.793ZoB6P4RBHaWOF?alt=media&token=89f89d5f-1a18-4266-9b04-a425cf416b86"
        },
        "_id": "64fda134edf6d2799f76e7b0",
        "batch": 41,
        "userType": "user",
        "isSpecialUser": "",
        "status": 1,
        "userDetails": {
            "fName": "Satyanarayan",
            "lName": "Dalei",
            "mName": "",
            "homeDist": "Balasore",
            "regNum": "2205105056",
            "gradCourse": "B.Sc(Physics)",
            "socialLinks": {
                "linkedInLink": "https://www.linkedin.com/in/satyadalei/",
                "githubLink": "https://github.com/satyadalei"
            }
        },
        "fieldOfInterest": "Full-Stack Web Dev",
        "tag": "",
        "isTag": false,
        "rollNum": 56,
        "registrationDate": "2023-09-10T10:57:56.792Z",
        "__v": 0
    },
    {
        "profilePic": {
            "givenName": "sri pabitra ranjan sahoo.jpeg2023-09-10T11:03:59.042ZKafgGmw2Eeu9",
            "url": "https://firebasestorage.googleapis.com/v0/b/igit-mca-web.appspot.com/o/images%2FprofileImages%2F41%2Fsri%20pabitra%20ranjan%20sahoo.jpeg2023-09-10T11%3A03%3A59.042ZKafgGmw2Eeu9?alt=media&token=7aa8ff91-b0a6-4057-ad56-45b1498bd17c"
        },
        "_id": "64fda29fedf6d2799f76e7c8",
        "batch": 41,
        "userType": "user",
        "isSpecialUser": "",
        "status": 1,
        "userDetails": {
            "fName": "Pabitra",
            "lName": "Sahoo",
            "mName": "",
            "homeDist": "Kendrapada",
            "regNum": "2205105056",
            "gradCourse": "B.Sc(Physics)",
            "socialLinks": {
                "linkedInLink": "https://www.linkedin.com/in/satyadalei/",
                "githubLink": "https://github.com/satyadalei"
            }
        },
        "fieldOfInterest": "Full-Stack Web Dev",
        "tag": "",
        "isTag": false,
        "rollNum": 18,
        "registrationDate": "2023-09-10T11:03:59.034Z",
        "__v": 0
    },
    {
        "profilePic": {
            "givenName": "shshs_dibya.jpg2023-09-10T11:09:14.686ZLUsU0C6toGCT",
            "url": "https://firebasestorage.googleapis.com/v0/b/igit-mca-web.appspot.com/o/images%2FprofileImages%2F41%2Fshshs_dibya.jpg2023-09-10T11%3A09%3A14.686ZLUsU0C6toGCT?alt=media&token=a11cd9e4-5e90-432a-b626-c11dc436cf4a"
        },
        "_id": "64fda3daedf6d2799f76e7db",
        "batch": 41,
        "userType": "user",
        "isSpecialUser": "",
        "status": 1,
        "userDetails": {
            "fName": "Dibyajyoti",
            "lName": "Behera",
            "mName": "",
            "homeDist": "Malkangiri",
            "regNum": "2205105056",
            "gradCourse": "B.Sc(Physics)",
            "socialLinks": {
                "linkedInLink": "https://www.linkedin.com/in/satyadalei/",
                "githubLink": "https://github.com/satyadalei"
            }
        },
        "fieldOfInterest": "Full-Stack Web Dev",
        "tag": "",
        "isTag": false,
        "rollNum": 20,
        "registrationDate": "2023-09-10T11:09:14.684Z",
        "__v": 0
    },
    {
        "profilePic": {
            "givenName": "AI_Generated_Image.jpeg2023-09-10T11:15:25.310ZgUQPTPirav6n",
            "url": "https://firebasestorage.googleapis.com/v0/b/igit-mca-web.appspot.com/o/images%2FprofileImages%2F41%2FAI_Generated_Image.jpeg2023-09-10T11%3A15%3A25.310ZgUQPTPirav6n?alt=media&token=6dfc2a49-bb98-4cb4-99b0-1b149eeaa8f9"
        },
        "_id": "64fda54dedf6d2799f76e7fc",
        "batch": 41,
        "userType": "user",
        "isSpecialUser": "",
        "status": 1,
        "userDetails": {
            "fName": "A Sudhir",
            "lName": "Patra",
            "mName": "Kumar",
            "homeDist": "Bhadrak",
            "regNum": "2205105056",
            "gradCourse": "B.Sc(Physics)",
            "socialLinks": {
                "linkedInLink": "https://www.linkedin.com/in/satyadalei/",
                "githubLink": "https://www.linkedin.com/in/satyadalei/"
            }
        },
        "fieldOfInterest": "Cloud Computing",
        "tag": "",
        "isTag": false,
        "rollNum": 1,
        "registrationDate": "2023-09-10T11:15:25.308Z",
        "__v": 0
    }
]

arrayData.sort((a, b) => {
    const fNameA = a.userDetails.fName.toUpperCase();
    const fNameB = b.userDetails.fName.toUpperCase();

    if (fNameA < fNameB) {
        return -1;
    }
    if (fNameA > fNameB) {
        return 1;
    }

    return 0;
});

console.log(arrayData);
