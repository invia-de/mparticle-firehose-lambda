provider "aws" {
  region     = "${var.region}"
}

locals {
    common_tags = "${map(
        "project", "${var.project}",
        "managedBy", "terraform"
    )}"
}
