window.onload = function() {
    //芸能人好感度ランキングから名前を借りました。出身地や年齢は加工しています。
    const people =
    [
        { Name : '明石家さんま', Age : 63, Sex : 'Male', BirthPlace : '東京都'},
        { Name : '阿部寛', Age : 54, Sex : 'Male', BirthPlace : '神奈川県'},
        { Name : 'マツコ・デラックス', Age : 46, Sex : 'Male', BirthPlace : '千葉県'},
        { Name : '内村光良', Age : 54, Sex : 'Male', BirthPlace : '熊本県'},
        { Name : '新垣結衣', Age : 30, Sex : 'Female', BirthPlace : '神奈川県'},
        { Name : '浅田真央', Age : 28, Sex : 'Female', BirthPlace : '東京都'},
        { Name : '綾瀬はるか', Age : 33, Sex : 'Female', BirthPlace : '熊本県'}
    ];
    

    const first = _.first(people);
    console.log(first);
    //{Name: "明石家さんま", Age: 63, Sex: "Male", BirthPlace: "東京都"}

    const men = _.filter(people, p => p.Sex === 'Male');
    console.log(men);
    //{Name: "明石家さんま", Age: 63, Sex: "Male", BirthPlace: "東京都"}
    //{Name: "阿部寛", Age: 54, Sex: "Male", BirthPlace: "神奈川県"}
    //{Name: "マツコ・デラックス", Age: 46, Sex: "Male", BirthPlace: "千葉県"}
    //{Name: "内村光良", Age: 54, Sex: "Male", BirthPlace: "熊本県"}

    const firstFemale = _.find(people, p => p.Sex === 'Female');
    console.log(firstFemale);
    //{Name: "新垣結衣", Age: 30, Sex: "Female", BirthPlace: "神奈川県"}

    const existPersonFromKumamoto = _.some(people, p => p.BirthPlace === '熊本県');
    console.log(existPersonFromKumamoto);
    //true

    //const areAllMale = _people.All(p => p.Sex == Sex.Male);

    const orderedByAge = _.orderBy(people, ['Age'], ['asc']);

    console.log(orderedByAge);
    //{Name: "浅田真央", Age: 28, Sex: "Female", BirthPlace: "東京都"}
    //{Name: "新垣結衣", Age: 30, Sex: "Female", BirthPlace: "神奈川県"}
    //{Name: "綾瀬はるか", Age: 33, Sex: "Female", BirthPlace: "熊本県"}
    //{Name: "マツコ・デラックス", Age: 46, Sex: "Male", BirthPlace: "千葉県"}
    //{Name: "阿部寛", Age: 54, Sex: "Male", BirthPlace: "神奈川県"}
    //{Name: "内村光良", Age: 54, Sex: "Male", BirthPlace: "熊本県"}
    //{Name: "明石家さんま", Age: 63, Sex: "Male", BirthPlace: "東京都"}

    const orderedByAgeThenByName = _.orderBy(people, ['Age', 'Name'], ['desc', 'asc']);

    console.log(orderedByAgeThenByName);
    //{Name: "明石家さんま", Age: 63, Sex: "Male", BirthPlace: "東京都"}
    //{Name: "内村光良", Age: 54, Sex: "Male", BirthPlace: "熊本県"}
    //{Name: "阿部寛", Age: 54, Sex: "Male", BirthPlace: "神奈川県"}
    //{Name: "マツコ・デラックス", Age: 46, Sex: "Male", BirthPlace: "千葉県"}
    //{Name: "綾瀬はるか", Age: 33, Sex: "Female", BirthPlace: "熊本県"}
    //{Name: "新垣結衣", Age: 30, Sex: "Female", BirthPlace: "神奈川県"}
    //{Name: "浅田真央", Age: 28, Sex: "Female", BirthPlace: "東京都"}

    const groupByAndOrderedBy = _.groupBy(people, p => p.BirthPlace);
    console.log(groupByAndOrderedBy);

    //千葉県
    //{Name: "マツコ・デラックス", Age: 46, Sex: "Male", BirthPlace: "千葉県"}

    //東京都
    //{Name: "明石家さんま", Age: 63, Sex: "Male", BirthPlace: "東京都"}
    //{Name: "浅田真央", Age: 28, Sex: "Female", BirthPlace: "東京都"}

    //熊本県
    //{Name: "内村光良", Age: 54, Sex: "Male", BirthPlace: "熊本県"}
    //{Name: "綾瀬はるか", Age: 33, Sex: "Female", BirthPlace: "熊本県"}

    //神奈川県
    //{Name: "阿部寛", Age: 54, Sex: "Male", BirthPlace: "神奈川県"}
    //{Name: "新垣結衣", Age: 30, Sex: "Female", BirthPlace: "神奈川県"}

    const minBy = _.minBy(people, p => p.Age);
    console.log(minBy);
    console.log(minBy.Age);
    //最小値:28

    const maxBy = _.maxBy(people, p => p.Age);
    console.log(maxBy);
    console.log(maxBy.Age);
    //最小値:28

};