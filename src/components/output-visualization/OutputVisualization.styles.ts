import styled from "styled-components";

export const OutputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 80%;
`;

export const SectionTitle = styled.h2`
  margin-top: 2rem;
  color: #333;
`;

export const DoughnutChartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 300px;
`;

export const DoughnutChartLabel = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #4caf50;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`;

export const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 0.5rem;
  background-color: #f2f2f2;
  text-align: left;
`;

export const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 0.5rem;
`;

export const Section = styled.section`
  padding: 1rem 0;
  border-top: 1px solid #ddd;
  background-color: #f9f9f9;
`;

export const InfoChartWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const EnergyInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
