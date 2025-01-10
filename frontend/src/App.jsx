import { React, useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'

import { IconSun, IconMoon, IconGauge, IconGaugeFilled, IconDashboard, IconChartLine, IconSettings, IconTool, IconInfoSquareRounded, IconFingerprint, IconActivity, IconChevronRight, IconBriefcase, IconBriefcaseFilled
  , IconPlayerPause, IconLogout, IconSwitchHorizontal, IconMessage, IconStar, IconHeart, IconChevronDown, IconTableHeart
  , IconFileLike, IconSparkles
  , IconChevronUp, IconSearch, IconSelector
  , IconColumns
  , IconStairsUp, IconTrendingDown, IconTrendingUp
  , IconCircleFilled, IconCircle
  , IconCirclesFilled
  , IconDots, IconPencil, IconTrash
  , IconPhone, IconMapPin, IconAt
  , IconBrandGithub
} from '@tabler/icons-react';

import { LineChart } from '@mantine/charts';

import { useDisclosure, useLocalStorage, useToggle } from '@mantine/hooks';

import './App.css'
//import '@mantine/core/styles.css';

import {
  ActionIcon,
  Accordion,
  AppShell,
  Avatar,
  Box,
  Button,
  Burger,
  Card, 
  Center,
  Chip,
  Container,
  Divider,
  Image,
  Grid,
  Group,
  Kbd,
  Paper,
  Progress, 
  rem,
  Menu,
  NavLink,
  Switch,
  Tabs,
  Title,
  Table,
  Text,
  TextInput,
  Tooltip,
  useMantineTheme,
  SegmentedControl,
  Skeleton, ScrollArea, SimpleGrid,
  useComputedColorScheme, useMantineColorScheme,
  UnstyledButton,
  getContrastColor,
  Anchor, 
  Modal
} from '@mantine/core';

import cx from 'clsx';

import { debounce } from 'lodash';

import PropTypes from 'prop-types';


import classes from './Demo.module.css';

import classesTable from './TableSort.module.css';

import '@mantine/charts/styles.css';

import { data } from './data';

const user = {
  name: 'Maria Helen',
  email: 'janspoon@fighter.dev',
  image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
};

function UserMenu(){
  const theme = useMantineTheme();
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  return (
    <Menu
      width={260}
      position="bottom-end"
      transitionProps={{ transition: 'pop-top-right' }}
      onClose={() => setUserMenuOpened(false)}
      onOpen={() => setUserMenuOpened(true)}
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton className={cx(classes.user, { [classes.userActive]: userMenuOpened })} >
          <Group gap={7}>
            <Avatar src={user.image} alt={user.name} radius="md" size="2.3rem" />
            <Text fw={500} size="sm" lh={1} mr={3}>
              {user.name}
            </Text>
            <IconChevronDown size={12} stroke={1.5} />
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>Settings</Menu.Label>
        <Menu.Item leftSection={<IconSettings size={16} stroke={1.5} />}>
          User settings
        </Menu.Item>
        <Menu.Item leftSection={<IconLogout size={16} stroke={1.5} />}>Logout</Menu.Item>
        <Menu.Divider />
        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item color="salmon" leftSection={<IconTrash size={16} stroke={1.5} />}>
          Delete account
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>

  )
}

const data_navbar = [
  { icon: IconGauge, label: 'Dashboard', description: 'Value of Stocks now' },
  { icon: IconFileLike, label: 'Reports', description: 'Schedule reports' },
  { icon: IconTableHeart, label: 'My data', description: 'Excel table with your position'},
  //{ icon: IconTool, label: 'Setup', rightSection: <IconChevronRight size="1rem" stroke={1.5} />, },
  //{ icon: IconActivity, label: 'Activity' },
  //{ icon: IconInfoSquareRounded, label: 'About', sx: '{ flexGrow: 1 }', gap:0 },
];

function MenuNavLink({open}) {
  const [active, setActive] = useState(0);
  //const links = data_navbar.map((item) => <LinksGroup {...item} key={item.label} />);
  const items = data_navbar.map((item, index) => (
    <NavLink 
      href="#required-for-focus"
      key={'nav_'+item.label}
      active={index === active}
      label={item.label}
      description={item.description}
      rightSection={item.rightSection}
      leftSection={<item.icon size="1.7rem" stroke={1.5} />}
      onClick={() => setActive(index)}
      variant="light"
      sx={item.mt}
    />
  ));
  return (
  <Box >
    {items}
    <NavLink 
      key="nav_about"
      label="About"
      leftSection={<IconInfoSquareRounded size="1.7rem" stroke={1.5} />}
      variant="light"
      onClick={open}
    />
  </Box>
  );
}
/*

*/
function AsideTabs() {
  return (
    <Tabs defaultValue="first">
      <Tabs.List grow>
        <Tabs.Tab value="first">News</Tabs.Tab>
        <Tabs.Tab value="second">Top 5</Tabs.Tab>
        <Tabs.Tab value="third">Alerts</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="first">
        <NewsList/>
      </Tabs.Panel>
      <Tabs.Panel value="second">
        <SegmentedTop/>
        <AccordionTop/>
      </Tabs.Panel>
      <Tabs.Panel value="third">
        <AlertTabs/>
      </Tabs.Panel>
    </Tabs>
  );
}

const data_news = [
  {title:"Noticia 1", content:"Please click anywhere on this card to claim your reward, this is not a fraud, trust us", href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
  {title:"Noticia 2", content:"Please click anywhere on this card to claim your reward, this is not a fraud, trust us", href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
  {title:"Noticia 3", content:"Please click anywhere on this card to claim your reward, this is not a fraud, trust us", href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
  {title:"Noticia 4", content:"Please click anywhere on this card to claim your reward, this is not a fraud, trust us", href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
  {title:"Noticia 5", content:"Please click anywhere on this card to claim your reward, this is not a fraud, trust us", href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
  {title:"Noticia 6", content:"Please click anywhere on this card to claim your reward, this is not a fraud, trust us", href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
]

function NewsList() {
  return (
    <ScrollArea style={{ height: 'calc(100vh - 100px)' }}>
      {data_news.map((news, index) => (
        <Card key={'nws_'+index} shadow="sm" radius="xs" mb="xs" component="a"  href={news.href} target="_blank">
          <Text size="md" lineClamp={2}>{news.title}</Text>
          <Text size="sm" lineClamp={2}>{news.content}</Text>
          <Text c="dimmed" size="xs" lineClamp={1} style={{ marginTop: 3 }}>{news.href}</Text>
        </Card>
      ))}
    </ScrollArea>
  );
}

function ButtonTheme() {
  const { setColorScheme } = useMantineColorScheme({keepTransitions: true,});
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  return (
  <ActionIcon
      onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
      variant="default"
      size="lg"
      aria-label="Toggle color scheme"
    >
      <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
      <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
  </ActionIcon>
  );
}

function ButtonAside(action) {
  const [value, toggle] = useToggle([true, false]);
  const vr = !value ? 'default' : 'light'
  return (
    <Button leftSection={<IconSparkles stroke={1} size="1.5rem"/>} style={{fontWeight:300}} variant={vr} onClick={() => {toggle(); action.asideOpen((o) => !o)}}>Insights</Button>
  );
}

/** CHART LINE */
function CustomTooltip({ label, payloads }) {
  if (!label || !payloads) return null; 
  const { name, value, top } = payloads;
  //console.log(payloads)
  const element = document.querySelector('.recharts-tooltip-wrapper');
  element.style.top = (top+18)+'px'
  element.style.left = '22px'
  element.style.position = 'fixed'
  return (
    <Paper px="xs" py={0} withBorder shadow="md" radius="md" mb={0} >
      <Text fw={500} >
        {label}
      </Text>
      <Text>
        {name}: {value}
      </Text>
    </Paper>
  );
}

let lastTarget = null; // Variável externa para armazenar o último alvo

function ChartLine() {
  const [tooltipContent, setTooltipContent] = useState({ label: '', payloads: null });
  const handleMouseExit = (e) => {
    //let target = e.target.closest('.recharts-surface');
    if (document.querySelector(".recharts-tooltip-wrapper:not([style*='visibility: hidden'])")) return;
    if (!lastTarget) return;
    lastTarget.querySelectorAll('.recharts-layer .recharts-dot.active-dot').forEach(dot => { 
      dot.classList.toggle('active-dot',false); 
      dot.setAttribute('r','3');
    });
  }
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e; // Get mouse pos
    // Check element target
    const target = e.target.closest('.recharts-surface');
    if (!target) return;
    lastTarget = target
    // Check tooltip activate
    if (!document.querySelector(".recharts-tooltip-wrapper:not([style*='visibility: hidden'])")||
        e.target.classList.contains('recharts-legend-wrapper')||
        e.target.classList.contains('app-LineChart-axis')){
      handleMouseExit()
      return
    }
    // Calc index X (nearest)
    const {width,left} = target.querySelector('.recharts-cartesian-grid').getBoundingClientRect();
    const pointPart = width / ((data.length - 1) * 2);
    const dataIndex = Math.floor(((clientX - left - pointPart) / pointPart) / 2) + 1;
    const point = data[dataIndex];
    // Calc pos Y (nearest)
    const closestSeries = Array.from(target.querySelectorAll(`.recharts-layer .recharts-dot:nth-child(${dataIndex + 1})[name]`))
    .reduce((closest, dot) => {
      const { top } = dot.getBoundingClientRect();
      const distance = Math.abs(clientY + window.scrollY - (top + window.scrollY));
      const pointName = dot.getAttribute('name');
      return distance < closest.distance ? { name: pointName, value: point[pointName], distance: distance, top: Math.floor(top), dot:dot } : closest;
    }, { name: '', value: Infinity, distance: Infinity, top: Infinity, dot:null });
    // Remove a classe ativa de todos os dots
    target.querySelectorAll('.recharts-layer .recharts-dot.active-dot').forEach(dot => { 
      if (dot !== closestSeries.dot) {
      dot.setAttribute('r','3')
      dot.classList.toggle('active-dot',false); 
      }
    });
    closestSeries.dot.classList.toggle('active-dot',true);
    closestSeries.dot.setAttribute('r','8')
    // Define o conteúdo do tooltip e registra no console
    setTooltipContent({ label: point.date, payloads: closestSeries });
    //console.log('Closest Series:', closestSeries);
  };

  return (
    <LineChart
      title="teste"
      h={250}
      data={data}
      tooltipProps={{
        content: () => <CustomTooltip label={tooltipContent.label} payloads={tooltipContent.payloads} />,
      }}
      onMouseMove={handleMouseMove}  // Custom Tooltip
      onMouseLeave={handleMouseExit}
      dataKey="date"
      //tooltipAnimationDuration={300}
      withLegend
      legendProps={{ verticalAlign: 'bottom', height: 50 }}
      //activeDotProps={{ r: 8, strokeWidth: 1, fill: '#fff' }}
      //legendType="rect"
      referenceLines={[
        { y: 2399, label: 'AVG', strokeDasharray: '2 2', stroke: 'rgba(250, 82, 82, 0.3)', strokeWidth: 2 },
        { x: 'Mar 24', label: 'Min', strokeDasharray: '2 2', },
      ]}
      series={[
        { name: 'CBAV3', color: 'indigo.6' },
        { name: 'CMIN3', color: 'var(--mantine-color-orange-8)' },
        { name: 'CSNA3', color: 'teal.6' },
      ]}
    />
  );
}

function ScrollableLineChart() {
  const chartContainerRef = useRef(null);
  useEffect(() => {
    const handleScroll = (e) => {
      //console.log('Scroll event detected:', e);
      const mouseEvent = new MouseEvent('mousemove', { bubbles: true, });
      document.querySelector('.recharts-surface').dispatchEvent(mouseEvent);
    };
    const chartContainer = chartContainerRef.current;
    if (chartContainer) {
      chartContainer.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (chartContainer) {
        chartContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);
  return (
    <div className="line-chart-container" ref={chartContainerRef} style={{ overflow: 'auto', maxHeight: '400px' }}>
      <ChartLine />
    </div>
  );
}

/* TABLE */
function ThSort({ children, reversed = false, sorted = false, onSort }) {
  const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector;
  return (
    <Table.Th className={classes.th}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group justify="space-between">
          <Text fw={500} fz="sm">
            {children}
          </Text>
          {onSort && (
          <Center className={classes.icon}>
            <Icon size={16} stroke={1.5} />
          </Center>
          )}
        </Group>
      </UnstyledButton>
    </Table.Th>
  );
}
ThSort.propTypes = {
  children: PropTypes.node.isRequired,
  reversed: PropTypes.bool,
  sorted: PropTypes.bool,
};
  //onSort: PropTypes.func.isRequired,

function filterData(data, search) {
  if (!data.length) return []
  //console.log('data:',data,'search:',search)
  const query = search.toLowerCase().trim();
  return data.filter((item) =>
    Object.keys(item).some((key) => 
      String(item[key]).toLowerCase().includes(query)
    )
  );
}

function sortData(data, payload) {
  const { sortBy } = payload;

  if (!sortBy) {
    return filterData(data, payload.search);
  }

  return filterData(
    [...data].sort((a, b) => {
      const valA = a[sortBy];
      const valB = b[sortBy];
      // Verifica se os valores são números
      const isNumberA = typeof valA === 'number';
      const isNumberB = typeof valB === 'number';
      // Ordenação reversa ou não
      const compare = isNumberA && isNumberB ? valA - valB : valA.localeCompare(valB);
      // Se for para inverter a ordem, inverte o resultado
      return payload.reversed ? -compare : compare;
    }),
    payload.search
  );

}

const dataTable = [
  {
    name: 'Athena Weissnat',
    company: 'Little - Rippin',
    email: 'Elouise.Prohaska@yahoo.com',
    reviews: { positive: 2223, negative: 259 },
  },
  {
    name: 'Deangelo Runolfsson',
    company: 'Greenfelder - Krajcik',
    email: 'Kadin_Trantow87@yahoo.com',
    reviews: { positive: 5677, negative: 1265 },
  },
  {
    name: 'Danny Carter',
    company: 'Kohler and Sons',
    email: 'Marina3@hotmail.com',
    reviews: { positive: 3487, negative: 1845 },
  },
  {
    name: 'Trace Tremblay PhD',
    company: 'Crona, Aufderhar and Senger',
    email: 'Antonina.Pouros@yahoo.com',
    reviews: { positive: 8576, negative: 663 },
  },
  {
    name: 'Derek Dibbert',
    company: 'Gottlieb LLC',
    email: 'Abagail29@hotmail.com',
    reviews: { positive: 6631, negative: 993 },
  },
  {
    name: 'Viola Bernhard',
    company: 'Funk, Rohan and Kreiger',
    email: 'Jamie23@hotmail.com',
    reviews: { positive: 8124, negative: 1847 },
  },
  {
    name: 'Austin Jacobi',
    company: 'Botsford - Corwin',
    email: 'Genesis42@yahoo.com',
    reviews: { positive: 2223, negative: 259 },
  },
  {
    name: 'Hershel Mosciski',
    company: 'Okuneva, Farrell and Kilback',
    email: 'Idella.Stehr28@yahoo.com',
    reviews: { positive: 5677, negative: 1265 },
  },
  {
    name: 'Mylene Ebert',
    company: 'Kirlin and Sons',
    email: 'Hildegard17@hotmail.com',
    reviews: { positive: 3487, negative: 1845 },
  },
  {
    name: 'Lou Trantow',
    company: 'Parisian - Lemke',
    email: 'Hillard.Barrows1@hotmail.com',
    reviews: { positive: 8576, negative: 663 },
  },
  {
    name: 'Dariana Weimann',
    company: 'Schowalter - Donnelly',
    email: 'Colleen80@gmail.com',
    reviews: { positive: 6631, negative: 993 },
  },
  {
    name: 'Dr. Christy Herman',
    company: 'VonRueden - Labadie',
    email: 'Lilyan98@gmail.com',
    reviews: { positive: 8124, negative: 1847 },
  },
  {
    name: 'Katelin Schuster',
    company: 'Jacobson - Smitham',
    email: 'Erich_Brekke76@gmail.com',
    reviews: { positive: 2223, negative: 259 },
  },
  {
    name: 'Melyna Macejkovic',
    company: 'Schuster LLC',
    email: 'Kylee4@yahoo.com',
    reviews: { positive: 5677, negative: 1265 },
  },
  {
    name: 'Pinkie Rice',
    company: 'Wolf, Trantow and Zulauf',
    email: 'Fiona.Kutch@hotmail.com',
    reviews: { positive: 3487, negative: 1845 },
  },
  {
    name: 'Brain Kreiger',
    company: 'Lueilwitz Group',
    email: 'Rico98@hotmail.com',
    reviews: { positive: 8576, negative: 663 },
  },
];


const dataTable2 = [
  {
    name: 'CBAV3',
    actual: 30,
    avg: 32,
    company: 'abc'
  },
  {
    name: 'MRFG3',
    actual: 19,
    avg: 6,
    company: 'bca'
  },
  {
    name: 'AURE3',
    actual: 4.49,
    avg: 11.74,
    company: 'cab'
  },
  {
    name: 'BBAS3',
    actual: 23.96,
    avg: 20.65,
    company: 'cba'
  },
];

/** Button Select Columns */
function ButtonMenuColTable({ columns, colVis, setColVis }) {
  // Função para alternar a visibilidade das colunas
  const tgColVis = (column) => {
    setColVis((prev) => ({
      ...prev,
      [column]: !prev[column],
    }));
  };
  return (
    <Menu transitionProps={{ transition: 'pop-top-right' }} position="bottom-end" width={220} withinPortal >
      <Menu.Target>
        <ActionIcon variant="default" size="lg" mb="md" aria-label="Cols visible">
          <IconColumns stroke={1} />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown p={20} pb={7} mb={0}>
      <Group spacing="md">
        {columns.map((column) => (
          <div key={'div_'+column} style={{ width: '100%' }}>
            <Switch
              checked={colVis[column]}
              onChange={() => tgColVis(column)}
              label={`${column.charAt(0).toUpperCase() + column.slice(1)}`}
              classNames={classes}
            />
          </div>
        ))}
        </Group>
      </Menu.Dropdown>
    </Menu>
  );
}

function SegmentedTop() {
  return (
    <SegmentedControl
      radius="xl"
      size="md"
      data={['Now', '5 days', '15 days', 'Month', 'Year']}
      classNames={classes}
    />
  );
}

/** Table */
function TableSort3() {
  const dataWithIndicators = dataTable2.map((i, index) => ({
    ...i,
    id: 'r'+(index+1),
    pc: Math.round(i.actual / i.avg * 100) / 100,
    pco: (i.actual > i.avg ? '+' : '') + (Math.round(((i.actual / i.avg)-1) * 10000)/100).toFixed(0),
    pc_po: ( i.actual > i.avg && (i.actual / i.avg) > 2 ? Math.round( ((i.actual / i.avg) - 1) / 1 * 10 ) : 0 ),
    pc_p: ( i.actual > i.avg && (i.actual / i.avg) < 2 ? Math.round( ((i.actual / i.avg) - 1) / 1 * 100 ) : (i.actual > i.avg) ? 100 : 0 ),
    pc_n: ( i.actual < i.avg && (i.actual / i.avg) > 0.5 ? Math.round( ((i.actual / i.avg) - 0.5) / 0.5 * 100 ) : (i.actual < i.avg) ? 100 : 0 ),
    pc_no: ( i.actual < i.avg && (i.actual / i.avg) < 0.5 ? Math.round( ((i.actual / i.avg) - 0) / 0.01 ) : 0 ),
  }));
  //console.log(dataWithIndicators)
  const [sortedData, setSortedData] = useState(dataWithIndicators);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const setSorting = (field) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(dataWithIndicators, { sortBy: field, reversed, search }));
  };
  const handleSearchChange = (event) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(sortData(dataWithIndicators, { sortBy, reversed: reverseSortDirection, search: value }));
  };
  // Definindo as colunas da tabela
  const columns = ['actual', 'avg', '%', 'pco', 'distribution'];
  const columnsHide = ['pco']
  // Inicializando a visibilidade das colunas como 'true' (todas visíveis por padrão)
  const initialVisibility = columns.reduce((acc, column) => {
    acc[column] = (columnsHide.includes(column) ? false : true); // Inicialmente, todas as colunas estão visíveis (Switch checado)
    return acc;
  }, {});
  // Estado para armazenar a visibilidade das colunas
  const [colVis, setColVis] = useState(initialVisibility);
  
  const rows = sortedData.map((row, index) => {
    const pc_po0 = 50 - row.pc_po;
    const pc_p0 = 100 - row.pc_p;
    const pc_n0 = 100 - row.pc_n;
    const pc_no0 = 50 - row.pc_no; 
    return (
      <Table.Tr key={'tr1_'+row.id}>
        <Table.Td>{row.name}</Table.Td>
        {colVis['actual'] && <Table.Td>{row.actual}</Table.Td>}
        {colVis['avg'] && <Table.Td>{row.avg}</Table.Td>}
        {colVis['%'] && <Table.Td>{Intl.NumberFormat('en-US').format(row.pc)}</Table.Td>}
        {colVis['pco'] && <Table.Td>{row.pco}</Table.Td>}
        {/** Intl.NumberFormat('en-US', { style: 'percent', signDisplay: 'always' }).format(row.pco) */}
        {colVis['distribution'] && <Table.Td>
          <Group justify="space-between">
            <Text fz="xs" c="red" fw={300}>-</Text>
            <Text fz="xs" c="teal" fw={300}></Text>
            <Text fz="xs" c="teal" fw={300}>+</Text>
          </Group>
          <Progress.Root size="md">
            <Progress.Section value={pc_no0} color="rgba(178, 34, 34, 0.1)" orangered="true" /> 
            <Progress.Section value={row.pc_no} color="orangered" orangered="true" /> 
            <Progress.Section value={pc_n0} color="rgba(178, 34, 34, 0.3)" firebrick="true" /> 
            <Progress.Section value={row.pc_n} color="firebrick" firebrick="true" /> 
            <Progress.Section value={row.pc_p} color="green" green="true" />
            <Progress.Section value={pc_p0} color="rgba(0, 128, 0, 0.3)" green="true" />
            <Progress.Section value={row.pc_po} color="lawngreen" lawngreen="true" />
            <Progress.Section value={pc_po0} color="rgba(0, 128, 0, 0.1)" lawngreen="true" />
          </Progress.Root>
        </Table.Td>}
      </Table.Tr>
    );
  });

  return (
    <ScrollArea h={300} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
      <Group justify="space-between" spacing="xs" >
        <TextInput
          placeholder="Search by any field"
          mb="md"
          leftSection={<IconSearch size={16} stroke={1.5} />}
          value={search}
          onChange={handleSearchChange}
          style={{ flex: 1 }}
        />
        <ButtonMenuColTable columns={columns} colVis={colVis} setColVis={setColVis}  />
      </Group>
      <Table horizontalSpacing="md" verticalSpacing="xs" miw={700} layout="fixed">
        <Table.Thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
        <Table.Tr>
            <ThSort sorted={sortBy === 'name'} reversed={reverseSortDirection} onSort={() => setSorting('name')} >Name</ThSort>
            {colVis['actual'] && <ThSort sorted={sortBy === 'actual'} reversed={reverseSortDirection} onSort={() => setSorting('actual')} >actual</ThSort>}
            {colVis['avg'] && <ThSort sorted={sortBy === 'avg'} reversed={reverseSortDirection} onSort={() => setSorting('avg')} >AVG</ThSort> }
            {colVis['%'] && <ThSort sorted={sortBy === 'pc'} reversed={reverseSortDirection} onSort={() => setSorting('pc')} >%</ThSort>}
            {colVis['pco'] && <ThSort sorted={sortBy === 'pco'} reversed={reverseSortDirection} onSort={() => setSorting('pco')} >PCO</ThSort>}
            {colVis['distribution'] && <ThSort sorted={sortBy === 'pc'} reversed={reverseSortDirection} onSort={() => setSorting('pc')} >Distribution</ThSort>}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {rows.length > 0 ? (
            rows
          ) : (
            <Table.Tr>
              <Table.Td colSpan={Object.keys(data[0]).length}>
                <Text fw={500} ta="center">Nothing found</Text>
              </Table.Td>
            </Table.Tr>
          )}
        </Table.Tbody>
      </Table>
    </ScrollArea>
  );
}

function AccordionTop() {
  return (
    <Accordion variant="contained">
      <Accordion.Item value="photos">
        <Accordion.Control icon={ <IconStairsUp style={{ color: 'var(--mantine-color-blue-6)', width: rem(20), height: rem(20) }} /> } >
          Mais negociadas
        </Accordion.Control>
        <Accordion.Panel>
          <ChipTop1/>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="print">
        <Accordion.Control icon={ <IconTrendingDown style={{ color: 'var(--mantine-color-red-6)', width: rem(20), height: rem(20) }} /> } >
          Que mais caíram
        </Accordion.Control>
        <Accordion.Panel>
          <ChipTop2/>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="camera">
        <Accordion.Control icon={ <IconTrendingUp style={{ color: 'var(--mantine-color-teal-6)', width: rem(20), height: rem(20) }} /> } >
          Que mais subiram
        </Accordion.Control>
        <Accordion.Panel>
          <ChipTop3/>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}

function ChipTop1 (){
  const stocks = [
    { name: 'AAPL', change: 3.2, desc:'2.1 Mi, 97k quotes' }, // Ação que subiu 3.2%
    { name: 'TSLA', change: 5.6, desc:'3.4 Mi, 202k quotes' }, // Ação que subiu 5.6%
    { name: 'AMZN', change: 2.9, desc:'0.7 Mi, 57k quotes' }, // Ação que subiu 2.9%
    //{ name: 'GOOG', change: 8.4 }, // Ação que subiu 8.4%
    //{ name: 'MSFT', change: 4.5 }, // Ação que subiu 4.5%
  ];
  const topStocks = stocks
    .sort((a, b) => b.change - a.change)  // Ordena de forma decrescente pela variação
    .slice(0, 3);  // Pega apenas as 3 maiores
  return(
    <>
    {topStocks.map((stock,index) => (
      <Group spacing="sm" direction="row" key={'tp1stkg_'+stock.name}>
      <Chip key={'tp1stkc_'+stock.name} icon={<IconCircleFilled style={{ width: rem(8), height: rem(8), color: 'var(--mantine-color-blue-8)' }} />} color="blue" variant="outline" mb={5}>
        <Text size="sm">{stock.name}: {stock.change}%</Text>
      </Chip>
      <Text c="dimmed" size="sm">{stock.desc}%</Text>
      </Group>
    ))}
    </>
  )
}

function ChipTop2 (){
  const stocks = [
    { name: 'AAPL', change: 3.2, desc:'2.1 Mi, 97k quotes' }, // Ação que subiu 3.2%
    { name: 'TSLA', change: 5.6, desc:'3.4 Mi, 202k quotes' }, // Ação que subiu 5.6%
    { name: 'AMZN', change: 2.9, desc:'0.7 Mi, 57k quotes' }, // Ação que subiu 2.9%
    //{ name: 'GOOG', change: 8.4 }, // Ação que subiu 8.4%
    //{ name: 'MSFT', change: 4.5 }, // Ação que subiu 4.5%
  ];
  const topStocks = stocks
    .sort((a, b) => b.change - a.change)  // Ordena de forma decrescente pela variação
    .slice(0, 3);  // Pega apenas as 3 maiores
  return(
    <>
    {topStocks.map((stock,index) => (
      <Group spacing="sm" direction="row" key={'tp2stkg_'+stock.name}>
      <Chip key={'tp2stkc_'+stock.name} icon={<IconCircleFilled style={{ width: rem(8), height: rem(8), color: 'var(--mantine-color-red-5)' }} />} color="red" variant="outline" mb={5}>
        <Text size="sm">{stock.name}: {stock.change}%</Text>
      </Chip>
      <Text c="dimmed" size="sm">{stock.desc}%</Text>
      </Group>
    ))}
    </>
  )
}

function ChipTop3 (){
  const stocks = [
    { name: 'AAPL', change: 3.2, desc:'2.1 Mi, 97k quotes' }, // Ação que subiu 3.2%
    { name: 'TSLA', change: 5.6, desc:'3.4 Mi, 202k quotes' }, // Ação que subiu 5.6%
    { name: 'AMZN', change: 2.9, desc:'0.7 Mi, 57k quotes' }, // Ação que subiu 2.9%
    //{ name: 'GOOG', change: 8.4 }, // Ação que subiu 8.4%
    //{ name: 'MSFT', change: 4.5 }, // Ação que subiu 4.5%
  ];
  const topStocks = stocks
    .sort((a, b) => b.change - a.change)  // Ordena de forma decrescente pela variação
    .slice(0, 3);  // Pega apenas as 3 maiores
  return(
    <>
    {topStocks.map((stock,index) => (
      <Group spacing="sm" direction="row" key={'to3stkg_'+index}>
      <Chip key={'to3stkc_'+index} icon={<IconCircleFilled style={{ width: rem(8), height: rem(8), color: 'var(--mantine-color-teal-8)' }} />} color="teal" variant="outline" mb={5}>
        <Text size="sm">{stock.name}: {stock.change}%</Text>
      </Chip>
      <Text c="dimmed" size="sm">{stock.desc}%</Text>
      </Group>
    ))}
    </>
  )
}

function AlertTable() {
  const data = [
    { stock: 'CBAV3', op: '>', value: 3.22, },
    { stock: 'PETR4', op: '>', value: '10% avg', },
    { stock: 'AURE3', op: '<', value: '10% avg', },
    { stock: 'HCTR11', op: '<', value: '3 days', },
    { stock: 'CBCR11', op: '>', value: '5 days', },
  ]
  const rows = data.map((i, index) => (
    <Table.Tr key={`rwAl${index}`}>
      <Table.Td align="center">{i.stock}</Table.Td>
      <Table.Td align="center"><Kbd>{i.op}</Kbd></Table.Td>
      <Table.Td align="center">{i.value}</Table.Td>
      <Table.Td style={{ minWidth: '30px', maxWidth: '40px' }}>
        <Group gap={0} justify="flex-end"><AlertTableMenu/></Group>
      </Table.Td>
    </Table.Tr>
  ));
  return (
    <Table highlightOnHover>
      <Table.Tbody>
        {rows}
      </Table.Tbody>
    </Table>
  );
}

function AlertTableMenu() {
  return (
  <Menu transitionProps={{ transition: 'pop' }} withArrow position="top-end" withinPortal>
    <Menu.Target>
      <ActionIcon variant="subtle" color="gray">
        <IconDots size={16} stroke={1.5} />
      </ActionIcon>
    </Menu.Target>
    <Menu.Dropdown>
      <Menu.Item leftSection={<IconPencil size={16} stroke={1.5} color='var(--mantine-color-blue-6)' />}>Edit</Menu.Item>
      <Menu.Item leftSection={<IconTrash size={16} stroke={1.5} color='var(--mantine-color-red-5)' />}>Delete</Menu.Item>
    </Menu.Dropdown>
  </Menu>
  )
}

function AlertTabs() {
  return (
    <Tabs variant="pills" style={{backgroudColor:"red"}} defaultValue="current" m={10}>
      <Tabs.List grow>
        <Tabs.Tab value="current">Current</Tabs.Tab>
        <Tabs.Tab value="history">History</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="current" pt="xs">
        <AlertTable/>
      </Tabs.Panel>
      <Tabs.Panel value="history" pt="xs">
        <AlertLogs/>
      </Tabs.Panel>
    </Tabs>
  );
}

function AlertLogs() {
  // Exemplo de dados de logs (simulando um array de objetos)
  const logs = [
    { date: '2025-01-06 15:30:00', stoke: 'AAPL', op: '>', value: '1000' },
    { date: '2025-01-06 15:35:00', stoke: 'TSLA', op: '<', value: '10% avg' },
    { date: '2025-01-06 15:40:00', stoke: 'MSFT', op: '<', value: '10% avg' },
    { date: '2025-01-06 15:50:00', stoke: 'GOOG', op: '<', value: '3 days' },
    { date: '2025-01-06 15:55:00', stoke: 'AMZN', op: '>', value: '5 days' },
    { date: '2025-01-06 16:00:00', stoke: 'META', op: '<', value: '3500' },
    { date: '2025-01-06 15:30:00', stoke: 'AAPL', op: '>', value: '1000' },
    { date: '2025-01-06 15:35:00', stoke: 'TSLA', op: '<', value: '2000' },
    { date: '2025-01-06 15:40:00', stoke: 'MSFT', op: '<', value: '1500' },
    { date: '2025-01-06 15:50:00', stoke: 'GOOG', op: '>', value: '2500' },
    { date: '2025-01-06 15:55:00', stoke: 'AMZN', op: '<', value: '5000' },
    { date: '2025-01-06 16:00:00', stoke: 'META', op: '>', value: '3500' },
  ];

  return (
      <ScrollArea style={{ height: 'calc(100vh - 145px)' }}>
          {logs.map((log, index) => (
              <Card
              key={'lgs_'+index}
              shadow="sm"
              padding="xs"   // Padding reduzido para ser compacto
              withBorder
              mb={10}
              style={{
                display: 'flex',
                alignItems: 'center', // Alinha verticalmente os itens
                justifyContent: 'space-between', // Distribui os itens ao longo da linha
              }}
            >
              {/* Exibindo todas as informações numa linha só */}
              <Group spacing="xs" style={{ width: '100%' }}>
                <Text size="xs" c="dimmed" style={{ flexShrink: 0 }}>
                  {log.date}
                </Text>
                <Text size="sm" weight={500} style={{ flexShrink: 0 }}>
                  {log.stoke}
                </Text>
                <Text size="sm" weight={500} style={{ flexShrink: 0 }}>
                  <Kbd>{log.op}</Kbd>
                </Text>
                <Text size="sm" c={log.op=='>'?'var(--mantine-color-blue-6)':'var(--mantine-color-red-5)'} style={{ flexShrink: 0 }}>
                  {log.value}
                </Text>
              </Group>
            </Card>
          ))}
      </ScrollArea>
  );
};


function AboutListIcon() {
  const MOCKDATA = [
    { title: 'Git', desc: 'https://github.com/rudaruda/appstocks', icon: IconBrandGithub },
    { title: 'Email', desc: 'filiperuda@gmail.com', icon: IconAt },
    { title: 'Address', desc: 'Brasil', icon: IconMapPin },
    //{ title: 'Working hours', description: '8 a.m. – 11 p.m.', icon: IconSun },
  ];
  return (
    MOCKDATA.map((item, index) => (
    <Group key={'abl_'+index} direction="row" spacing="xs" style={{ flexWrap: 'nowrap' }}>
      <Box mr="md" p={0} m={0}>
        <item.icon size={24} />
      </Box>
      <Box p={0} m={0}>
        <Text size="xs">{item.title}</Text>
          {item.desc.substring(0, 4) === 'http' ? (
            <Text><Anchor href={item.desc} target="_blank">{item.desc.replace('https://','')}</Anchor></Text>
          ) : (
            <Text>{item.desc}</Text>
          )}
      </Box>
    </Group>
    )) );
}

function AboutModal({opened, close}) {
  return (
      <Modal
        opened={opened}
        onClose={close}
        title="About It"
        overlayProps={{ backgroundOpacity: 0.3, blur: 3,}}
      >
        <SimpleGrid cols={{ base: 1, sm: 1 }}>
          <Title>Awesome Simple AppStocks</Title>
          <Text>AWSAP</Text>
          <AboutListIcon/>
        </SimpleGrid>
      </Modal>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [asideOpened, setAsideOpened] = useState(true);
  const [navbarOpened, setNavbarOpened] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <AppShell
      header={{ height: 50 }}
      navbar={{ breakpoint: 'xs', collapsed: { desktop: !navbarOpened } }}
      aside={{ width:400, breakpoint: 'xs', collapsed: { desktop: !asideOpened, mobile: true } }}
      padding="md"
    >
      <AboutModal opened={opened} close={close} />
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={navbarOpened} onClick={() => setNavbarOpened((o) => !o)} size="sm" />
          AWSAP AppStocks
          <Group ml="auto">
            <ButtonTheme />
            <ButtonAside asideOpen={setAsideOpened} />
            <UserMenu/>
          </Group>
        </Group>
      </AppShell.Header>
      {/* Lado Esquerdo */}
      <AppShell.Navbar zIndex="103" style={{ width: 300, transform: navbarOpened ? 'translateX(0)' : 'translateX(-100%)', transition: 'transform 0.3s ease' }} >
        <MenuNavLink open={open}/>
      </AppShell.Navbar>
      {/* Conteúdo Central */}
      <AppShell.Main>
        <Grid gutter="sm">
          {/* Coluna para o LineChart */}
          <Grid.Col span={12} md={8}>
            <Paper shadow="sm" p="sm">
              <Title order={6} p="xs">Fechamento por dia</Title>
              <ScrollableLineChart/>
            </Paper>
          </Grid.Col>
          {/* Coluna para outros itens (ex: cartões ou resumos) */}
          <Grid.Col span={12} md={4}>
            <Paper shadow="sm" p="sm">
              <Title order={4}>Resumo</Title>
              {/*<p>Outros itens podem ser colocados aqui, como cartões ou informações complementares.</p>*/}
              <TableSort3/>
            </Paper>
          </Grid.Col>
        </Grid>
      </AppShell.Main>
      {/* Lado Direito */}
      <AppShell.Aside style={{ width: 400, transform: asideOpened ? 'translateX(0)' : 'translateX(+100%)', transition: 'transform 0.3s ease' }}>        
        <AsideTabs/>
      </AppShell.Aside>
      {/* Footer */}
      <AppShell.Footer>Footer
        <Button variant="default" onClick={open}>
          Open modal
        </Button>
      
      </AppShell.Footer>
    </AppShell>
    
  )
}

export default App
