import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Col, Divider, List, Row } from "antd";
import { getChaptersList } from "../../store/actions/QuranActions";
import { QURAN_API } from "../../constants/UrlConstants";
import { TextEllipsis } from "../../helpers/GeneralHelper";

const KEY = "CHAPTERS";
const URL = QURAN_API.LIST_CHAPTERS;

const QuramHome = () => {
  const dispatch = useDispatch();

  const stateQuran = useSelector((state) => state?.quran);
  const { [KEY]: listOfChapters = [] } = stateQuran;

  useEffect(() => {
    dispatch(getChaptersList(KEY, URL));
  }, []);

  const renderItem = (item) => {
    return (
      <List.Item>
        <Card className="shadow-xl cursor-pointer" title={item.title}>
          <Row className="ju justify-between">
            <Row>
              <Col className="rounded border h-6 w-6 text-center mr-2 self-center bg-[#E3EADE]">
                {item?.id}
              </Col>
              <Col>
                <Row>{item?.name_simple}</Row>
                <Row className="w-3/5 text-ellipsis whitespace-nowrap">{TextEllipsis(item?.translated_name?.name)}</Row>
              </Col>
            </Row>
            <Col style={{ alignContent: "flex-end", alignSelf: "flex-end" }}>
              <Row>{item?.name_arabic}</Row>
              <Row>{item?.verses_count} Verses</Row>
            </Col>
          </Row>
        </Card>
      </List.Item>
    );
  };

  return (
    <div>
      <Divider orientation="left"></Divider>
      <List
        grid={{ gutter: 16, xl: 4, xxl: 4, lg: 4, md: 3, sm: 2, xs: 1 }}
        header={<div>isLoading</div>}
        footer={<div>Footer</div>}
        dataSource={listOfChapters}
        renderItem={renderItem}
      />
    </div>
  );
};

export default QuramHome;
