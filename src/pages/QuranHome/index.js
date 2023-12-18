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
        <Card
          className="cursor-pointer hover:border-none bg-primary hover:bg-accent hover:text-white chapter-card"
          title={item.title}
        >
          <Row className="ju justify-between">
            <Row>
              <Col className="rounded border h-6 w-6 text-center mr-2 self-center bg-secondary chapter-id-box">
                {item?.id}
              </Col>
              <Col>
                <Row className="text-base font-notmal">{item?.name_simple}</Row>
                <Row className="w-3/5 text-ellipsis whitespace-nowrap text-xs">
                  <div
                    className="lg:tooltip"
                    data-tip={item?.translated_name?.name}
                  >
                    {TextEllipsis(item?.translated_name?.name)}
                  </div>
                </Row>
              </Col>
            </Row>
            <Col style={{ alignContent: "flex-end", alignSelf: "flex-end" }}>
              <Row className="text-base font-notmal">{item?.name_arabic}</Row>
              <Row className="text-xs">{item?.verses_count} Verses</Row>
            </Col>
          </Row>
        </Card>
      </List.Item>
    );
  };

  return (
    <div>
      <List
        grid={{ gutter: 16, xl: 4, xxl: 4, lg: 4, md: 3, sm: 2, xs: 1 }}
        // header={<div>isLoading</div>}
        // footer={<div>Footer</div>}
        dataSource={listOfChapters}
        renderItem={renderItem}
      />
    </div>
  );
};

export default QuramHome;
