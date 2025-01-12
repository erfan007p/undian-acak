import React from "react";
import { Card, Table } from "tabler-react";
import "./style.css";

const PreviouslyDrawnItemsBlock = props => (
  <Card
    title="Undian Sebelumnya"
    className="past-drawn-block"
    body={
      <Table>
        <Table.Body className="past-drawn-item">
          {props.pastDrawnItems.length === 0
            ? "Tiada Undian Sebelumnya"
            : props.pastDrawnItems.map((item, index) => (
                <Table.Row key={index}>
                  <Table.Col>{item}</Table.Col>
                </Table.Row>
              ))}
        </Table.Body>
      </Table>
    }
  />
);

export default PreviouslyDrawnItemsBlock;
