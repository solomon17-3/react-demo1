import React, { useState, useEffect } from 'react';
import { Button, Card } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import axios from 'axios';
import PostFrom from '../components/PostFrom';
import MainTable from '../components/MainTable';



//スタイルの定義
const useStyles = makeStyles((theme) => createStyles({
    card: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    },
}));

//ヘッダーのコンテンツ用の配列定義
const headerList = ['名前', 'タスク内容', '編集', '完了'];

function Home() {
    //定義したスタイルを利用するための設定
    const classes = useStyles();

    //postsの状態を管理
    const [posts, setPosts] = useState([]);

    //入力データをセット
    const [formData, setFormData] = useState({name:'', content:''});

    //新規登録ボタンのボタン名
    const btnName = "登録";

    //画面に到着したらgetPostsDataを呼ぶ
    useEffect(() => {
        getPostsData();
    },[])

    //一覧情報を取得しステートpostsにセットする
    const getPostsData = () => {
        axios
            .get('/api/posts')
            .then(response => {
                setPosts(response.data);
            })
            .catch(() => {
                console.log('通信に失敗しました');
            });
    }

    //入力されたら(都度)入力値を変更するためのfunction
    const inputChange = (event) => {
        const key = event.target.name;
        const value = event.target.value;
        formData[key] = value;
        let data = Object.assign({}, formData);
        setFormData(data);
    }

    //postFormに入力された値をjson形式でpostする
    const createPost = async() => {
        //値が空だと弾く
        if(formData == ''){
            return;
        }

        //axios：非同期関数！→awaitを使う
        await axios.post('api/post/create', {
            name: formData.name,
            content: formData.content
        })
        .then((res) => {
            //戻り値をtodoリストにセット
            const tempPosts = posts
            tempPosts.push(res.data);
            setPosts(tempPosts);

            //入力内容をリセットする
            setFormData('');

        })
        .catch(error => {
            console.log(error);
        });
    }

    //取得した変数rowsを定義
    let rows = [];

    //rowsに値を格納
    posts.map((post) => {
        rows.push({
            name: post.name,
            content: post.content,
            editBtn: <Button color="secondary" variant="contained" key={post.id} href={`/post/edit/${post.id}`}>編集</Button>,
            deleteBtn: <Button color="primary" variant="contained">完了</Button>,
        })
    })

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="card">
                        <h1>タスク管理</h1>
                        <Card className={classes.card}>
                            <PostFrom data={formData} inputChange={inputChange} btnFunc={createPost} btnName={btnName}/>
                        </Card>
                        <Card className={classes.card}>
                            {/* テーブル部分の定義 */}
                            <MainTable headerList={headerList} rows={rows}/>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
