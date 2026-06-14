vpc_name             = "digiliansM"
cidr_block           = "10.20.0.0/16"
public_subnet_cidrs  = ["10.20.1.0/24", "10.20.2.0/24"]
availability_zones   = ["eu-west-1a", "eu-west-1b"]

igw_name         = "main-igw"
route_table_name = "public-route-table"

allowed_ssh_cidr = "0.0.0.0/0"

instance_ami         = "ami-0dad359ff462124ca"
instance_type        = "t3.micro"

asg_min_size        = 2
asg_max_size        = 4
asg_desired_capacity = 2