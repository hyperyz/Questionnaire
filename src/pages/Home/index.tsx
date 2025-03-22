import { Button, Flex, Table, Space } from "antd";
import { PlusOutlined, CompassOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

const columns = [
    {
        title: '创建日期',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '问卷标题',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '题目数量',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '最近更新日期',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '操作',
        dataIndex: 'address',
        key: 'address',
        render: () => (
            <Space size="middle">
                <a>查看问卷</a>
                <a>编辑</a>
                <a>删除</a>
            </Space>
        ),
    },
];
function App(): React.ReactElement {
    const navigate = useNavigate();
    return (
        <div className="container">
            <h1 className="font-weight-100 text-center">柚子问卷系统</h1>
            <Flex gap="small" wrap>
                <Button type="primary" icon={<PlusOutlined />} onClick={() => navigate('/editor')}>创建问卷</Button>
                <Button color="pink" variant="solid" icon={<CompassOutlined />} onClick={() => navigate('/materials')}>组件市场</Button>
            </Flex>
            <Table columns={columns} />;
        </div>
    )
}

export default App
