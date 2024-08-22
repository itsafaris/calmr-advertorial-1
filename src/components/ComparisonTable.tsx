import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Text,
  Badge,
  Icon,
} from "@chakra-ui/react";
import { FaBan, FaCheck } from "react-icons/fa";
import { Product } from "src/productData";

export type TableData = Array<Product>;

export function ComparisonTable({ data }: { data: TableData }) {
  const widths = [200, 120, 120, 220, 120, 160, 160, 280];

  return (
    <TableContainer>
      <Table variant="simple" size="sm" layout="fixed">
        <TableCaption>Weight loss solutions comparison</TableCaption>
        <Thead>
          <Tr>
            <Th width={widths[0]} whiteSpace={"pre-line"}>
              Weight Loss Method
            </Th>
            <Th width={widths[1]} whiteSpace={"pre-line"}>
              Initial Weight Loss
            </Th>
            <Th width={widths[2]} whiteSpace={"pre-line"}>
              Weight Maintenance
            </Th>
            <Th width={widths[3]} whiteSpace={"pre-line"}>
              Side Effects
            </Th>
            <Th width={widths[4]} whiteSpace={"pre-line"}>
              Monthly Cost
            </Th>
            <Th width={widths[5]} whiteSpace={"pre-line"}>
              Ease of Use
            </Th>
            <Th width={widths[6]} whiteSpace={"pre-line"}>
              Overall Rating
            </Th>
            <Th width={widths[7]} whiteSpace={"pre-line"}>
              Rating Comment
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, index) => {
            const isWinner = index === 0;
            const isRunnerUp = index === 1;
            return (
              <Tr key={index} bg={isWinner ? "green.50" : "white"}>
                <Td maxWidth={widths[0]} whiteSpace={"pre-line"}>
                  <Text>
                    {isWinner && (
                      <Badge mb={2} colorScheme="green">
                        🥇 winner
                      </Badge>
                    )}
                    {isRunnerUp && (
                      <Badge mb={2} colorScheme="gray">
                        🥈 runner up
                      </Badge>
                    )}
                    <Text fontWeight="bold">{item.method}</Text>
                  </Text>
                </Td>
                <Td width={widths[1]} whiteSpace={"pre-line"}>
                  {renderRating(item.initialWeightLoss)}
                </Td>
                <Td width={widths[2]} whiteSpace={"pre-line"}>
                  {renderRating(item.weightMaintenance)}
                </Td>
                <Td width={widths[3]} whiteSpace={"pre-line"}>
                  {item.sideEffects}
                </Td>
                <Td width={widths[4]} whiteSpace={"pre-line"}>
                  {item.monthlyCost}
                </Td>
                <Td
                  width={widths[5]}
                  whiteSpace={"pre-line"}
                  color={getEaseOfUseColor(item.easeOfUse)}
                >
                  {item.easeOfUse}
                </Td>
                <Td width={widths[6]} whiteSpace={"pre-line"}>
                  {renderRating(item.overallRating)}
                </Td>
                <Td width={widths[7]} whiteSpace={"pre-line"}>
                  {item.ratingComment}
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

const renderRating = (rating: number) => {
  const [value, total] = [rating, 5];
  return (
    <Box>
      {value === 5 ? <Icon as={FaCheck} color="green.500" /> : null}
      {value === 1 ? <Icon as={FaBan} color="red.500" /> : null}
      <Text display="inline" ml={2}>
        {rating}
      </Text>
    </Box>
  );
};

const getEaseOfUseColor = (ease: "easy" | "medium") => {
  switch (ease.toLowerCase()) {
    case "easy":
      return "green.500";
    case "medium":
      return "orange.500";
    default:
      return "inherit";
  }
};

export default ComparisonTable;
