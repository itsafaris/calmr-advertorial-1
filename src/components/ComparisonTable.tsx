import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  Badge,
  Icon,
} from "@chakra-ui/react";
import { FaBan, FaCheck } from "react-icons/fa";
import { Product } from "src/productData";
import { Span } from "./components";
import { siteConfig } from "src/conf";

export type TableData = Array<Product>;

export function ComparisonTable({ data }: { data: TableData }) {
  const widths = [200, 120, 130, 220, 120, 160, 160, 280];

  return (
    <TableContainer>
      <Table variant="simple" size="sm" layout="fixed">
        <Thead>
          <Tr>
            <Th width={widths[0]} whiteSpace={"pre-line"}>
              Weight Loss Product
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
              <Tr
                key={index}
                textDecoration={item.isRuledOut ? "line-through" : undefined}
                background={isWinner ? "green.100" : item.isRuledOut ? "red.50" : undefined}
                fontWeight={isWinner ? "bold" : undefined}
                cursor={isWinner ? "pointer" : undefined}
                onClick={() => {
                  if (isWinner) {
                    window.location.href = siteConfig.linkToMainProduct();
                  }
                }}
              >
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
                    <Text fontWeight={isWinner ? "bold" : "semibold"}>{item.method}</Text>
                  </Text>
                </Td>
                <Td width={widths[1]} whiteSpace={"pre-line"}>
                  <Text>{renderRating(item.initialWeightLoss)} </Text>
                </Td>
                <Td width={widths[2]} whiteSpace={"pre-line"}>
                  {renderRating(item.weightMaintenance)}
                </Td>
                <Td width={widths[3]} whiteSpace={"pre-line"}>
                  {item.sideEffects}
                </Td>
                <Td width={widths[4]} whiteSpace={"pre-line"}>
                  {Array(item.monthlyCost)
                    .fill("")
                    .map(() => "$")
                    .join("")}
                </Td>
                <Td width={widths[5]} whiteSpace={"pre-line"}>
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

  const color = value === 5 ? "green.600" : value === 1 ? "red.500" : undefined;
  const icon = value === 5 ? FaCheck : value === 1 ? FaBan : undefined;

  return (
    <Text>
      <Icon visibility={icon ? "visible" : "hidden"} as={icon} color={color} />
      <Span display="inline" ml={2}>
        {rating}
      </Span>{" "}
      / {total}
    </Text>
  );
};

export default ComparisonTable;
